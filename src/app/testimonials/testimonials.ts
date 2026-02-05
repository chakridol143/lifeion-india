import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  videoUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent implements OnInit {
  isModalOpen = false;
  selectedTestimonial: Testimonial | null = null;

  testimonials: any = {};

  constructor(private sanitizer: DomSanitizer) {
    this.initializeTestimonials();
  }

  ngOnInit(): void {
    // Component initialized
  }

  private initializeTestimonials(): void {
    this.testimonials = {
      row1: [
        {
          id: 1,
          name: 'Barry Zito',
          title: 'Former Baseball Pitcher',
          thumbnail: '/images/barry-zito.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/barry-zito.mp4')
        },
        {
          id: 2,
          name: 'Laz Alonso',
          title: 'American Actor',
          thumbnail: '/images/laz-alonso.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/laz-alonso.mp4')
        },
        {
          id: 3,
          name: 'Lindsey Jacobellis',
          title: 'Olympic Gold Medalist',
          thumbnail: '/images/lindsey-jacobellis.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/lindsey-jacobellis.mp4')
        },
        {
          id: 4,
          name: 'Oscar Valdez',
          title: 'Professional Boxer',
          thumbnail: '/images/oscar-valdez.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/oscar-valdez.mp4')
        }
      ],
      row2: [
        {
          id: 5,
          name: 'Dr. Mike Grego',
          title: 'Naturopathic',
          thumbnail: '/images/dr-mike-grego.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/dr-mike-grego.mp4')
        },
        {
          id: 6,
          name: 'Josh Hart',
          title: 'NBA Pro',
          thumbnail: '/images/josh-hart.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/josh-hart.mp4')
        },
        {
          id: 7,
          name: 'Matt Ioannidis',
          title: 'NFL Pro',
          thumbnail: '/images/matt-ioannidis.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/matt-ioannidis.mp4')
        },
        {
          id: 8,
          name: 'Ryan Kerrigan',
          title: 'NFL Pro',
          thumbnail: '/images/ryan-kerrigan.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/ryan-kerrigan.mp4')
        }
      ],
      row3: [
        {
          id: 9,
          name: 'Debra',
          title: 'Registered Nurse',
          thumbnail: '/images/debra.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/debra.mp4')
        },
        {
          id: 10,
          name: 'Rob Carpenter',
          title: 'Cancer Survivor',
          thumbnail: '/images/rob-carpenter.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/rob-carpenter.mp4')
        },
        {
          id: 11,
          name: 'Mary',
          title: 'Healing Cave Lady',
          thumbnail: '/images/mary.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/mary.mp4')
        },
        {
          id: 12,
          name: 'Janice Hughes',
          title: 'Wellness Coach',
          thumbnail: '/images/janice-hughes.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/janice-hughes.mp4')
        }
      ],
      row4: [
        {
          id: 13,
          name: 'Ruben Orozco',
          title: 'Cancer Survivor',
          thumbnail: '/images/ruben-orozco.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/ruben-orozco.mp4')
        },
        {
          id: 14,
          name: 'Jordan Kunaszyk',
          title: 'NFL Pro',
          thumbnail: '/images/jordan-kunaszyk.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/jordan-kunaszyk.mp4')
        },
        {
          id: 15,
          name: 'Jake Voskuhl',
          title: 'NBA Player',
          thumbnail: '/images/jake-voskuhl.avif',
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/videos/jake-voskuhl.mp4')
        }
      ]
    };
  }



  /**
   * Opens the video modal for a selected testimonial
   */
  openVideo(testimonial: Testimonial): void {
    this.selectedTestimonial = testimonial;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the video modal
   */
  closeVideoModal(): void {
    this.isModalOpen = false;
    this.selectedTestimonial = null;
    document.body.style.overflow = 'auto';
  }

  /**
   * Scrolls testimonial row to the right
   */
  scrollRight(rowId: string): void {
    console.log('[v0] Scrolling right for row:', rowId);
  }
}
