/**
 * Downloads Shopify blog atom pages and merges all <entry> into one feed file.
 * Output: src/assets/blogs/news-full.atom
 */

const fs = require("fs");
const path = require("path");

const BLOG_BASE = "https://lifeionizers.com/blogs/news.atom?page=";
const OUTPUT_PATH = path.join(__dirname, "src", "assets", "blogs", "news-full.atom");

// stop conditions
const MAX_PAGES = 200; // safety limit
const MIN_ENTRIES_TO_CONTINUE = 1;

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${res.status} for ${url}`);
  return await res.text();
}

function extractEntries(xmlText) {
  // extract all <entry>...</entry>
  const matches = xmlText.match(/<entry[\s\S]*?<\/entry>/g);
  return matches ? matches : [];
}

function extractFeedHeader(xmlText) {
  // keep the opening <feed ...> ... <author> etc until first <entry>
  const idx = xmlText.indexOf("<entry");
  if (idx === -1) return null;
  return xmlText.slice(0, idx).trim();
}

function extractFeedClosing(xmlText) {
  // last closing tag
  const closing = "</feed>";
  if (xmlText.includes(closing)) return closing;
  return "</feed>";
}

async function main() {
  console.log("🚀 Downloading Shopify Atom feed pages...");
  console.log("Base:", BLOG_BASE);

  let header = null;
  let closing = "</feed>";

  const allEntries = [];
  const seenSlugs = new Set();

  for (let page = 1; page <= MAX_PAGES; page++) {
    const url = BLOG_BASE + page;
    console.log(`📥 Fetching page ${page}: ${url}`);

    let xmlText;
    try {
      xmlText = await fetchText(url);
    } catch (e) {
      console.log(`⚠️ Stopping: failed to fetch page ${page}`);
      break;
    }

    if (!header) {
      header = extractFeedHeader(xmlText);
      closing = extractFeedClosing(xmlText);
    }

    const entries = extractEntries(xmlText);

    if (!entries || entries.length < MIN_ENTRIES_TO_CONTINUE) {
      console.log(`🛑 No entries found on page ${page}. Stopping.`);
      break;
    }

    let addedThisPage = 0;

    for (const entryXml of entries) {
      // get slug from link
      const linkMatch = entryXml.match(/<link[^>]+href="([^"]+)"/);
      const link = linkMatch ? linkMatch[1] : "";
      const slug = link ? link.split("/").pop() : "";

      // avoid duplicates across pages
      const uniqueKey = slug || entryXml.slice(0, 80);
      if (seenSlugs.has(uniqueKey)) continue;

      seenSlugs.add(uniqueKey);
      allEntries.push(entryXml);
      addedThisPage++;
    }

    console.log(`✅ Entries found: ${entries.length}, added: ${addedThisPage}`);

    // if page returns only duplicates, stop (means Shopify started repeating)
    if (addedThisPage === 0) {
      console.log("🛑 No new entries added (repeating). Stopping.");
      break;
    }
  }

  if (!header) {
    throw new Error("Could not extract feed header. Something wrong with feed.");
  }

  const mergedXml = [
    header,
    "",
    ...allEntries,
    "",
    closing
  ].join("\n");

  // ensure folder exists
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

  fs.writeFileSync(OUTPUT_PATH, mergedXml, "utf8");

  console.log("\n🎉 DONE!");
  console.log("Total unique entries:", allEntries.length);
  console.log("Saved to:", OUTPUT_PATH);
  console.log("\nNow update Angular feedUrl to:");
  console.log("  /assets/blogs/news-full.atom");
}

main().catch((err) => {
  console.error("❌ ERROR:", err);
  process.exit(1);
});
