import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface ActorReview {
  name: string;
  title: string;
  quote: string;
  fullTestimonial: string;
  category: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-actor',
  templateUrl: './actors.html',
  imports: [CommonModule],
  styleUrls: ['./actors.css']
})
export class ActorComponent implements OnInit {

  reviews: ActorReview[] = [
    {
      name: 'Mýa',
      title: 'Grammy Award Winning Artist',
      category: 'Grammy Award Winning Artist',
      thumbnail: '/images/at1.webp',
      quote: '"After my first sip I just knew I had to add it to my routine…"',
      fullTestimonial: '"I take my health seriously, I eat the healthiest foods, work hard every day in the gym, and now I drink the healthiest water. When I discovered the amazing health benefits of alkaline water, I just knew I had to add it to my routine. I looked at a lot of different machines, bottled waters. and I chose LIFE Ionizers because I was impressed by the care and attention they gave me. They took the time to find out about my water at home, and they made sure I had the best filters for it. The water from my LIFE Ionizer tastes great and I really feel hydrated by it. I recommend you try it, you\'ll feel the difference too."'
    },
    {
      name: 'Anthony Anderson',
      title: 'Professional Actor',
      category: 'Professional Actor',
      thumbnail: '/images/at2.jpg',
      quote: '"A close friend let me try the water and I knew I needed my own machine…"',
      fullTestimonial: '"My demanding schedule means sometimes I\'m forced to put myself on the back-burner, but the first time I tasted Alkaline water I knew I needed a machine of my own. I found and purchased a Life Ionizer, now it travels absolutely everywhere with me and I drink it every day. I love it!"'
    },
    {
      name: 'Debra Messing',
      title: 'Professional Actress',
      category: 'Professional Actress',
      thumbnail: '/images/at3.avif',
      quote: '"After making the switch to alkaline water, I have the energy I need…"',
      fullTestimonial: '"I got my Life Ionizer when I heard about the amazing benefits of alkaline water. I have the energy I need to keep up with my busy schedule, and i feel great! it makes a big difference in my health and lifestyle… and I know it would in yours too!"'
    },
    {
      name: 'Grace Potter',
      title: 'Professional Musician',
      category: 'Professional Musician',
      thumbnail: '/images/at4.jpg',
      quote: '"Drinking alkaline water is one of the most important things I do…"',
      fullTestimonial: '"Drinking alkaline water is one of the most important things I do to keep myself healthy, energized, and hydrated. That\'s why when I found out that Life Ionizers had the filtration technology necessary to fit my tour bus with a water ionizer, I jumped at the opportunity. The water from my Life Ionizer is delicious, and I can really feel the difference – the whole band can because we all drink it now. It\'s incredible, I feel better rested, more energized, and better than I ever have while touring, all from a glass of incredible water. You owe it to yourself to try it."'
    },
    {
      name: 'Laz Alonso',
      title: 'Professional Actor',
      category: 'Professional Actor',
      thumbnail: '/images/at5.jpg',
      quote: '"I started drinking the water and felt amazing changes right away…"',
      fullTestimonial: '"I\'ve worked my whole life to achieve my dreams, and one thing I won\'t let slow me down is my health. That\'s why I was interested in alkaline water and Life Ionizers. This water keeps me hydrated and energized, even on those long days that never seem to end."'
    },
    {
      name: 'Liquid Blue',
      title: 'Renowned Song & Dance Group',
      category: 'Renowned Song & Dance Group',
      thumbnail: '/images/at6.jpg',
      quote: '"We simply can\'t afford getting sick or falling behind…"',
      fullTestimonial: '"The Life Ionizers 8000 has exceeded all of our expectations. As a 7 piece band that has performed in over 100 countries, Liquid Blue is working around the clock writing and recording new material, and preparing to hit the road for tour after tour. That\'s why it is crucial that we stay on top of our health and maintain a high energy level. With our fast pace and demanding profession, we simply can\'t afford getting sick or falling behind. Thanks to the cutting edge technology of the Life Ionizer, we are more productive and creative than ever before. We enjoy the benefits of the Life Ionizers 8000 in our recording and rehearsal studio at home and the Life Ionizers 7500 while on the road."'
    },
    {
      name: 'Julian Pavone',
      title: 'World Record Holder for World\'s Youngest Professional Drummer',
      category: 'World\'s Youngest Drummer',
      thumbnail: '/images/at7.jpg',
      quote: '"Recognized the immediate health benefits of drinking Life water…"',
      fullTestimonial: '"As a traveling Rock Star at such a young tender age, Julian\'s parents, his strongest supporters, were concerned about his busy schedule. Julian\'s mom, Lisa Pavone M.D. double board certified, recognized the immediate benefits of drinking LIFE Alkaline Water. "LIFE Ionizers has certainly helped Julian cope with his never ending busy schedule" says Lisa Pavone, M.D. Traveling with Life Ionizer Alkaline Water around the country, Julian is not only entertaining the masses with his astute musical gift, but also educating people on the benefits of drinking Alkaline Water."'
    },
    {
      name: 'Nick S.',
      title: 'Professional Singer/Songwriter',
      category: 'Singer / Songwriter',
      thumbnail: '/images/at8.jpg',
      quote: '"I count on alkaline ionized water to keep my performance up…"',
      fullTestimonial: '"As a singer/songwriter I count on ionized water to keep me at my best. I drink from the LIFE 9200 at Level 4. I love this water!"'
    }
  ];

  selectedReview: ActorReview | null = null;

  constructor() {}

  ngOnInit(): void {}

  openTestimonial(review: ActorReview) {
    this.selectedReview = review;
  }

  closeTestimonial() {
    this.selectedReview = null;
  }
}
