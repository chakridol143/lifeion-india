import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

type BlogPost = {
  title: string;
  published: string;
  link: string;
  slug: string;
  summaryHtml: string;
  contentHtml: string;
  image?: string;
  category?: string;
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent implements OnInit {

  loading = true;
  errorMsg = '';

  posts: BlogPost[] = [];
  pagedPosts: BlogPost[] = [];

  page = 1;
  pageSize = 2;
  totalPages = 1;

  feedUrl = '/assets/blogs/news.atom';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.page = Number(params.get('page') || 1);
      this.loadFeed();
    });
  }

  loadFeed() {
    this.loading = true;
    this.errorMsg = '';

    // ✅ Force UI update immediately
    this.cdr.detectChanges();

    console.log('Loading atom feed from:', this.feedUrl);

    this.http.get(this.feedUrl, { responseType: 'text' }).subscribe({
      next: (xmlText) => {
        console.log('ATOM Loaded length:', xmlText.length);

        const parsed = this.parseAtom(xmlText);
        console.log('Total posts parsed:', parsed.length);

        // ✅ Run inside zone so UI refresh happens
        this.zone.run(() => {
          this.posts = parsed;
          this.totalPages = Math.max(1, Math.ceil(this.posts.length / this.pageSize));

          // clamp page
          if (this.page < 1) this.page = 1;
          if (this.page > this.totalPages) this.page = this.totalPages;

          this.applyPagination();

          this.loading = false;
          this.errorMsg = '';

          // ✅ Force UI refresh again
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        console.error('ATOM ERROR FULL:', err);
        this.errorMsg = 'Failed to load blog feed: ' + (err?.message || 'Unknown error');
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

      // First image from content
      const imgMatch = contentHtml.match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch?.[1];

      return {
        title,
        published,
        link,
        slug,
        summaryHtml,
        contentHtml,
        image,
        category: 'Water Ionizers'
      };
    });
  }

  applyPagination() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPosts = this.posts.slice(start, end);

    // ✅ Force UI update for pagination also
    this.cdr.detectChanges();
  }

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: p },
      queryParamsHandling: 'merge'
    });
  }

  getMiddlePages(): number[] {
    const pages: number[] = [];
    if (this.totalPages <= 2) return pages;

    const start = Math.max(2, this.page - 1);
    const end = Math.min(this.totalPages - 1, this.page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
  openPost(post: BlogPost) {
    this.router.navigate(['/learn/blog', post.slug]);
  }
} 