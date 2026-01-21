import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface HealthcareReview {
  name: string;
  title: string;
  quote: string;
  fullTestimonial: string;
  credentials?: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.html',
  imports: [CommonModule],
  styleUrls: ['./healthcare.css']
})
export class HealthcareComponent implements OnInit {

  reviews: HealthcareReview[] = [
    {
      name: 'Dr. Don Colbert',
      title: 'N.Y. Times Best-Selling Author',
      credentials: 'M.D.',
      thumbnail: '/images/h1.jpg',
      quote: '"There is only one water filtration system that I trust: a Life Ionizer…"',
      fullTestimonial: '"There is only one water filtration system that I trust and that\'s Life Ionizer, the life alkaline mineral water ionizer filters tap water through 3 filters then ionizes and alkalizes it. Ionized alkaline mineral water is the healthiest water available. We currently use one in our office as well as home and it should definitely be apart of your families investment in health, it will be one of the best investments in health you\'ve ever made."'
    },
    {
      name: 'Dr. Johnnie Ham',
      title: 'M.D.',
      thumbnail: '/images/h2.jpg',
      quote: '"My family uses it every day, and we swear by it for a healthier lifestyle…"',
      fullTestimonial: '"I am a strong believer in alkaline water. I have been using the Life Ionizer 9100 for 6 months, and have seen incredible benefits. My whole family uses it every day, and we swear by it for a healthier lifestyle. I recommend alkaline water for all my patients, since I know first-hand the many benefits."'
    },
    {
      name: 'Dr. Terry Rondberg',
      title: 'Doctor of Chiropractic',
      thumbnail: '/images/h3.jpg',
      quote: '"I bought a Life Ionizer and I can tell you, it\'s better than competing systems…"',
      fullTestimonial: '"The reason I decided to get a life ionizer is because I did my research. I don\'t like to recommend things lightly – I have to really make sure they\'re right for me. So I interviewed quite a few different people involved in alkalizing water and looked at a lot of different equipment. I wanted to make sure I got something that I could really appreciate and support. After speaking to several different companies and finding out more and more about this type of water – and I\'ve been in the water business for a long time promoting clean water for decades – I found a company that I really feel good about; it\'s called LIFE Ionizers. I actually visited the company and met a very professional team of experts who not only were very clear on the purpose of what they\'re doing, but were also extremely helpful to me personally. I found their team to be so professional I purchased a LIFE Ionizer; and I can tell you the results have been incredible! I\'ve looked at a lot of different ionizers and have found the LIFE Ionizer to be so outstanding that I strongly recommend it to all my friends in the Chiropractic profession as well as those outside the profession. I have and will continue to endorse this equipment and the people that sell it. I think you\'ll be more than satisfied with the way you\'re treated and the high quality of water that you will drink as a result of purchasing a LIFE Ionizer." - President and CEO, The Chiropractic Journal - Founder and CEO, World Chiropractic Alliance'
    },
    {
      name: 'George Jackson',
      title: 'Health Care Professional',
      thumbnail: '/images/h4.jpg',
      quote: '"There is simply no substitute for alkaline ionized water…"',
      fullTestimonial: '"As a Health-Care practitioner, I\'m always looking for ways to help my patients, I\'ve found one of the best. It is so fast; it is inexpensive and it is so easy to do. There is no substitute for alkaline ionized water and I recommend it to anyone."'
    },
    {
      name: 'Pete Cerqua',
      title: 'Renowned Fitness Trainer',
      thumbnail: '/images/h5.jpg',
      quote: '"Only the best for me, my family and especially for my clients…"',
      fullTestimonial: '"I knew drinking water was important… So I took a stand and purchased the Life Ionizer 7600 for my studio in NYC. Now all my clients are getting Alkaline 9.5 pH water when they come in for their workout. Only the best for me, my family and my clients."'
    },
    {
      name: 'Tom Woloshyn',
      title: 'Author of \'The Master Cleanse\'',
      thumbnail: '/images/h6.jpg',
      quote: '"I\'ve experienced a transformation in recovery…"',
      fullTestimonial: '"I have been using the Life Ionizer 7500 now for 2 to 3 months and have it found it to produce great tasting water. The water is very pleasing to the palate and also feels good on the tongue. I have been using it to make my lemonade while on the Master Cleanse as well. When traveling I will bring 3 or 4 gallons along so that I have a ready supply of good water. I have difficulty drinking water that does not have great taste or should I say has too much taste which includes chlorine and other chemicals. I highly recommend Life Ionizers to anyone wanting to improve their health and well-being. Anyone looking to alkalize their water for drinking should consider a Life Ionizer."'
    },
    {
      name: 'Katy Freeman',
      title: 'Psychotherapist',
      thumbnail: '/images/h7.jpg',
      quote: '"I have a greater sense of well-being, it\'s the greatest gift I\'ve given my body…"',
      fullTestimonial: '"I was introduced to ionized water about 8 months ago and it quickly became my body\'s best friend. Since I have been drinking Ionized water, I have a greater sense of well-being and it\'s the greatest gift I have given my body in a long time."'
    },
    {
      name: 'Dr. Craig Oster, PHD',
      title: 'Inspirational Psychologist',
      thumbnail: '/images/h8.jpg',
      quote: '"I highly recommend Life Ionizer for your overall well being…"',
      fullTestimonial: '"When, in 1994, I was given the diagnosis of ALS at age 30, and told that I would likely only live 3 to 5 more years, I was already aware of the importance of drinking plenty of pure water. Since the diagnosis, I have used several different kinds of water filtration systems, including reverse osmosis, ozone, and a carbon block system. In 2007, when I was further researching the role of water in health and healing, I was ecstatic to read about water ionization. My research led me to the clear choice of purchasing a Life Ionizer system. I was thrilled that the Life Ionizer allowed me to have the option of having water at a PH level higher than units that were available from other manufacturers. Also, the Life Ionizer systems generate the highest Oxygen Reduction Potential (ORP) amongst water ionizers on the market, creating powerful antioxidant water. I am grateful to enjoy vibrant water from my Life Ionizer system each and every day! I would not be without it and I see my Life Ionizer system as an integral part of my holistic healing program."'
    },
    {
      name: 'Jan Allan',
      title: 'RN, CST, NMT, ART',
      thumbnail: '/images/h9.jpg',
      quote: '"I did my research and decided to check out Life Ionizers…"',
      fullTestimonial: '"Jan is our main consultant and primary dealer for Life Ionizer. She has over 38 years of training, education and implementation in the medical field of western and alternative medicine. Jan is the author of two books in preventative healthcare. Her story on \'the water\': "The alkaline water machines were brought to my attention by a client, wanting me to look into it. Before the significant financial investment for them, I wanted to make sure it was what was needed therefore my research was without partiality and totally objective. It was then I stumbled onto \'LIFE IONIZERS\' after I had combed the market. I can truly say that LIFE Ionizers is better than the rest"'
    },
    {
      name: 'Sheryl Melson',
      title: 'PA',
      thumbnail: '/images/h10.jpg',
      quote: '"It\'s a good feeling to know that I am drinking the very best water …"',
      fullTestimonial: '"It\'s a good feeling to know that I am drinking the very best water from my Life Ionizer 9200. I have the under counter model with the talking and lighted dispenser mounted on my counter top. I am so spoiled that I do not know what I will do the next time I go away for a few days and have to settle for less than the best water. Funny how this machine holds me close. I do not want to go to far for too long without it. Do you think this is true love?"'
    }
  ];

  selectedReview: HealthcareReview | null = null;

  constructor() { }

  ngOnInit(): void {}

  openTestimonial(review: HealthcareReview) {
    this.selectedReview = review;
  }

  closeTestimonial() {
    this.selectedReview = null;
  }
}
