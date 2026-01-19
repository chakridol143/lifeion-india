import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type BlogPost = {
  title: string;
  published: string;
  link: string;
  slug: string;
  summaryHtml: string;
  contentHtml: string;
  image?: string;
};

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetailComponent implements OnInit {
  loading = true;
  errorMsg = '';
  post: BlogPost | null = null;

  feedUrl = '/assets/blogs/news.atom';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.loadPost(slug);
  }

  loadPost(slug: string) {
    this.loading = true;
    this.errorMsg = '';

    this.http.get(this.feedUrl, { responseType: 'text' }).subscribe({
      next: (xmlText) => {
        const posts = this.parseAtom(xmlText);
        this.post = posts.find(p => p.slug === slug) || null;

        if (!this.post) {
          this.errorMsg = 'Post not found.';
        }

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load blog post.';
        this.loading = false;
      }
    });
  }

  parseAtom(xmlText: string): BlogPost[] {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');

    const entries = Array.from(xml.getElementsByTagName('entry'));

    return entries.map((entry: any) => {
      const title = entry.getElementsByTagName('title')[0]?.textContent || '';
      const published = entry.getElementsByTagName('published')[0]?.textContent || '';
      const link = entry.getElementsByTagName('link')[0]?.getAttribute('href') || '';
      const slug = link.split('/').pop() || '';

      const summaryHtml = entry.getElementsByTagName('summary')[0]?.textContent || '';
      const contentHtml = entry.getElementsByTagName('content')[0]?.textContent || '';

      const imgMatch = contentHtml.match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch?.[1];

      return {
        title,
        published,
        link,
        slug,
        summaryHtml,
        contentHtml,
        image
      };
    });
  }
}
