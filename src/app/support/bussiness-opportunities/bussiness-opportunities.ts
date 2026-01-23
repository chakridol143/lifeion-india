import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-opportunities',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './bussiness-opportunities.html',
  styleUrl: './bussiness-opportunities.css'
})
export class BussinessOpportunities {
  reasonsList = [
    'Alkaline water ionizer business is growing at a faster rate than ever before',
    'Marketwatch estimates over $1.5 billion in growth for the next 5 years',
    'Industry-leading #1 alkaline water ionizer with pre-filtration system',
    'Pre-filtration system customized for each home or commercial location',
    'LIFE Dealers™ earn an industry best profit margin',
    'Opportunity to build a team of representatives in your local area, across the country, or throughout the world'
  ];

  testimonials = [
    {
      quote: 'There is only one water filtration system that I trust and that\'s Life Ionizer, the life alkaline mineral water ionizer filters tap water through 3 filters then ionizes and alkalizes it. Ionized alkaline mineral water is the healthiest water available. We currently use one in our office as well as home and it should definitely be apart of your families investment in health, it will be one of the best investments in health you\'ve ever made.',
      author: 'Dr. Don Colbert',
      title: 'N.Y. Times Best Selling Author',
      image: '/images/dr-don-colbert.webp'
    },
    {
      quote: 'It\'s a good feeling to know that I am drinking the very best water from my Life Ionizer 9200. I have the under counter model with the talking and lighted dispenser mounted on my counter top. I am so spoiled that I do not know what I will do the next time I go away for a few days and have to settle for less than the best water. Funny how this machine holds me close. I do not want to go to far for too long without it. Do you think this is true love?',
      author: 'Sheryl Mason',
      title: 'PA',
      image: '/images/sheryl-mason.webp'
    },
    {
      quote: 'There is only one water filtration system that I trust and that\'s Life Ionizer, the life alkaline mineral water ionizer filters tap water through 3 filters then ionizes and alkalizes it. Ionized alkaline mineral water is the healthiest water available. We currently use one in our office as well as home and it should definitely be apart of your families investment in health, it will be one of the best investments in health you\'ve ever made.',
      author: 'Dr. Johnnie Ham',
      title: 'M.D.',
      image: '/images/dr-johnnie-ham.webp'
    }
  ];

  currentTestimonialIndex = 0;

  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  previousTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  get currentTestimonial() {
    return this.testimonials[this.currentTestimonialIndex];
  }
}
