import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Review {
  name: string;
  title: string;
  quote: string;
  fullTestimonial: string;
  image?: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customers.html',
  imports: [CommonModule],
  styleUrls: ['./customers.css']
})
export class CustomerComponent implements OnInit {

  reviews: Review[] = [
    {
      name: 'Rebecca Stevens',
      title: 'Satisfied Customer',
      thumbnail: '/images/t1.jpg',
      quote: '"Great product for anyone wanting to improve their overall health…"',
      fullTestimonial: '"This is me with my Aussie Bailey. I\'ve been using my M7 for about a year now & love it! I\'ve noticed better recovery time with my race walking, less need for digestive supplements with meals and general wellness. I plan to begin giving to my dog also for her general health. Great product for anyone wanting to improve their overall health!"'
    },
    {
      name: 'Marisa Zeppieri Caruna',
      title: 'Satisfied Customer, Board Member of Lupus Foundation of America',
      thumbnail: '/images/t2.jpg',
      quote: '"I can\'t imagine life without my Life Ionizer…"',
      fullTestimonial: '"My husband and I have been using our Life Ionizer for several months and are thrilled with the benefits. The machine provides water that tastes incredible and has been phenomenal in terms of removing toxins and dirt in our produce. We juice several times per day and soak our vegetables in the water from our machine. We noticed from the very first time how much better the juice tastes! Within just a few minutes of soaking, you can see the water becomes dark as it removes the impurities. This is a huge help for someone like me whose body and immune system is already not working properly –now my body doesn\'t have to take on extra chemicals and toxins, because the Life Ionizer removes them for me. We soak the majority of our food of before we eat or cook. We both cannot imagine going back to drinking regular tap or bottled water ever again. Even traveling for a few days makes us long to be home and close to our machine! I would recommend soaking your produce in alkaline water to anyone who wants to avoid toxins in their food. Out of everything I\'ve done, my Life Ionizer has been one of the best. With my body continuing to improve and get healthier, I cannot imagine life without my Life Ionizer-I feel like my body has been given the best gift it could have ever received."'
    },
    {
      name: 'Bacil Smith Sr.',
      title: 'Satisfied Customer',
      thumbnail: '/images/t3.jpg',
      quote: '"I have been sharing this wonderful water with my friends…"',
      fullTestimonial: '"After just three days of drinking water from my new life ionizer… I have been sharing this wonderful water with my friends and can honestly say they are experience similar results as well."'
    },
    {
      name: 'Angelica Quezada',
      title: 'Satisfied Customer',
      thumbnail: '/images/t4.jpg',
      quote: '"Aprovecho hasta el agua acida para mi cara…"',
      fullTestimonial: '"Me compre mi filtro el ano pasado y no dejo de maravillarme, de los beneficios, tanto a mi familia como a mi, por si no fuera poco me acabo de ganar 439.00 dlls. Por referir a una persona que compro el filtro. Me siento con mas energia, mis problemas digestivos se han acabado, estoy muy feliz y no me arrepiento de haberlo comprado, aprovecho hasta el agua acida para mi cara y cabello aaa y mis plantas… Gracias!"'
    },
    {
      name: 'Connie Fritsch',
      title: 'Satisfied Customer',
      thumbnail: '/images/t5.jpg',
      quote: '"I also love my machine and the alkaline water for me, too…"',
      fullTestimonial: '"My husband is in stage four kidney failure and his doctor said alkaline water was one of the best things he could do for his kidney. I also love my machine and the alkaline water for me, too!"'
    },
    {
      name: 'Curtis Poirier',
      title: 'Satisfied Customer',
      thumbnail: '/images/t6.jpg',
      quote: '"The Ionizer water really tastes great, we purchased the under counter unit…"',
      fullTestimonial: '"It sure is nice to use Ionizer water for everything. We can taste the difference when we make coffee. We drink a lot of coffee. The Ionizer water really tastes great. We purchased the under the counter machine. Lucky, we had a hole in the granite for the Ionizer. It was a neat first class installation. Thanks!"'
    },
    {
      name: 'David Wright',
      title: 'Satisfied Customer',
      thumbnail: '/images/t7.jpg',
      quote: '"Life Ionizers uses an array of the latest advanced technology…"',
      fullTestimonial: '"I am a proponent for optimal wellness living and have spent many years learning about the science of the body, aging, and nutrition, and researching companies and products that provide the best technology and value for the masses. Water is an absolute necessity for the body to function properly. The chemistry of the water molecule is extremely interesting to say the least, but it leads to many different variables that could lead to water products that aren\'t optimized for utilization in the human body. Life Ionizers uses an array of the latest advanced technology to provide products that produce water that I find to be the most hydrating in the world. I am proud to be an owner of a Life Ionizer and look forward to a long life of ionized water to support my best health! Thank you!"'
    },
    {
      name: 'Ellie Liggett',
      title: 'Satisfied Customer',
      thumbnail: '/images/t8.jpg',
      quote: '"I think that drinking it throughout the day is central…"',
      fullTestimonial: '"I don\'t own a \'Life ionizer but have tasted a friends ionized water many times;sometimes he brings me some, because he knows I love the fresh spring water taste of it. I think that drinking it throughout the day is central to keeping my body PH alkalinized. I know that an alkaline body is resistant to bacteria, virus, fungal and parasitic items that can be lurking in the nose, stomach or intestines. Feeling better after drinking it and avoiding all of the toxic material in tap water is very important to me. I\'d rather drink this than ice tea or soda because it tastes so good and its so healthy for my body. I know that would be true for you too. Buy one today if you can or if you can\'t, get a good friend to bring you some!"'
    },
    {
      name: 'Howard & Verna Campbell',
      title: 'Satisfied Customer',
      thumbnail: '/images/t9.jpg',
      quote: '"Alkaline ionized water makes traveling a lot better for both of us…"',
      fullTestimonial: '"Hello, My wife and I have had our LIFE IONIZER 9000 for about two years, we have used it faithfully and find that when we travel my wife\'s legs and feet do not swell as they did before. Makes traveling a lot better for both of us."'
    },
    {
      name: 'Hugo Gumbs',
      title: 'Satisfied Customer',
      thumbnail: '/images/t10.jpg',
      quote: '"When family or friends visit my home I excitedly promote the ionized water..."',
      fullTestimonial: '"When family or friends visit my home I excitedly promote the ionized water. It has been a great addition to my lifestyle and wellness routine."'
    },
    {
      name: 'Jimi Dorsey',
      title: 'Satisfied Customer',
      thumbnail: '/images/t11.jpg',
      quote: '"Unbelievable, wonderful and fantastic are the best words I can say..."',
      fullTestimonial: '"Unbelievable, wonderful and fantastic are the best words I can say about my Life Ionizer. I truly love the results and benefits."'
    },
    {
      name: 'Katie Johnson',
      title: 'Satisfied Customer',
      thumbnail: '/images/t12.jpg',
      quote: '"Everyone should have one of these machines..."',
      fullTestimonial: '"Everyone should have one of these machines. The quality of water and the benefits are outstanding."'
    },
    {
      name: 'Kimberly Morrison',
      title: 'Satisfied Customer',
      thumbnail: '/images/t13.jpg',
      quote: '"I would recommend this to anyone who is trying alkaline water..."',
      fullTestimonial: '"I would recommend this to anyone who is trying alkaline water. It has made a noticeable difference in how I feel every day."'
    },
    {
      name: 'Mel Garratt',
      title: 'Satisfied Customer',
      thumbnail: '/images/t14.jpg',
      quote: '"We only drink ionized water in everything like tea, coffee, etc..."',
      fullTestimonial: '"We only drink ionized water in everything like tea, coffee, etc. It has become a permanent part of our household."'
    },
    {
      name: 'Michelle & Jarrett Skidmore',
      title: 'Satisfied Customer',
      thumbnail: '/images/t15.jpg',
      quote: '"My husband and I have reaped the rewards of drinking the alkaline water..."',
      fullTestimonial: '"My husband and I have reaped the rewards of drinking the alkaline water and we are extremely satisfied with our Life Ionizer."'
    },
    {
      name: 'Blake Dewberry',
      title: 'Satisfied Customer',
      thumbnail: '/images/t16.jpg',
      quote: '"I highly recommend Life Ionizer for your overall well being..."',
      fullTestimonial: '"I highly recommend Life Ionizer for your overall well being. It has exceeded my expectations."'
    },
    {
      name: 'Richard R.',
      title: 'Satisfied Customer',
      thumbnail: '/images/t17.jpg',
      quote: '"I have lost 21 pounds so far and have a ways to go..."',
      fullTestimonial: '"I have lost 21 pounds so far and have a ways to go, but drinking alkaline ionized water has helped me stay consistent and energized."'
    },
    {
      name: 'Earlene Coats',
      title: 'Satisfied Customer',
      thumbnail: '/images/t18.jpg',
      quote: '"I love it! Several of my co-workers have started drinking the alkaline water..."',
      fullTestimonial: '"I love it! Several of my co-workers have started drinking the alkaline water after seeing my results."'
    },
    {
      name: 'EA Von Bergen',
      title: 'Satisfied Customer',
      thumbnail: '/images/t19.jpg',
      quote: '"I wouldn’t recommend this company if I didn’t feel that they were the best..."',
      fullTestimonial: '"I wouldn’t recommend this company if I didn’t feel that they were the best. Life Ionizer delivers exactly what they promise."'
    },
    {
      name: 'Mark & Angi Schreiber',
      title: 'Satisfied Customer',
      thumbnail: '/images/t20.jpg',
      quote: '"We are very happy and satisfied with our Life water ionizer..."',
      fullTestimonial: '"We are very happy and satisfied with our Life water ionizer. It has improved our daily hydration and wellness."'
    },
    {
      name: 'Sheila',
      title: 'Satisfied Customer',
      thumbnail: '/images/t21.jpg',
      quote: '"I had been researching water ionizers for approximately three years..."',
      fullTestimonial: '"I had been researching water ionizers for approximately three years before purchasing Life Ionizer, and I am glad I did."'
    },
    {
      name: 'Carey Hairston',
      title: 'Satisfied Customer',
      thumbnail: '/images/t22.jpg',
      quote: '"I can’t live without this water! It makes me feel so good..."',
      fullTestimonial: '"I can’t live without this water! It makes me feel so good and energized throughout the day."'
    },
    {
      name: 'Laura P.',
      title: 'Satisfied Customer',
      thumbnail: '/images/t23.jpg',
      quote: '"It also is the most delicious water I’ve ever tasted..."',
      fullTestimonial: '"It also is the most delicious water I’ve ever tasted. I truly enjoy drinking water now."'
    },
    {
      name: 'Ruth Willard',
      title: 'Satisfied Customer',
      thumbnail: '/images/t24.jpg',
      quote: '"I recommend Life Ionizers to anyone who is interested in feeling their best..."',
      fullTestimonial: '"I recommend Life Ionizers to anyone who is interested in feeling their best and living a healthier lifestyle."'
    },
    {
      name: 'Nancy & Steve Marx',
      title: 'Satisfied Customer',
      thumbnail: '/images/t25.jpg',
      quote: '"We think this water helps to keep us looking and feeling young..."',
      fullTestimonial: '"We think this water helps to keep us looking and feeling young. We are very happy with the Life Ionizer and the quality of the water."'
    },
    {
      name: 'Jan Kennedy',
      title: 'Satisfied Customer',
      thumbnail: '/images/t26.jpg',
      quote: '"I’ve experienced a transformation in recovery..."',
      fullTestimonial: '"I’ve experienced a transformation in recovery after drinking the alkaline ionized water. It has been a great addition to my daily routine."'
    },
    {
      name: 'Nancy Lynam',
      title: 'Satisfied Customer',
      thumbnail: '/images/t27.jpg',
      quote: '"This machine offers so much by comparison to others..."',
      fullTestimonial: '"This machine offers so much by comparison to others. I am extremely satisfied with the performance and the water quality."'
    },
    {
      name: 'Tony & Marion Perrotta',
      title: 'Satisfied Customer',
      thumbnail: '/images/t28.jpg',
      quote: '"I highly recommend Life ionizer for your overall well being..."',
      fullTestimonial: '"I highly recommend Life ionizer for your overall well being. It has been a wonderful experience and I love the results."'
    },
    {
      name: 'Robert M.',
      title: 'Satisfied Customer',
      thumbnail: '/images/t29.jpg',
      quote: '"Thank you Life Ionizers. We saved over $500 using alkaline water..."',
      fullTestimonial: '"Thank you Life Ionizers. We saved over $500 using alkaline water and we feel great. This system is totally worth it!"'
    },
    {
      name: 'Ben Simon',
      title: 'Satisfied Customer',
      thumbnail: '/images/t30.jpg',
      quote: '"My family and I absolutely love the the life ionizer..."',
      fullTestimonial: '"My family and I absolutely love the the life ionizer. The water tastes amazing and we use it every day."'
    },
    {
      name: 'Irene Maple',
      title: 'Satisfied Customer',
      thumbnail: '/images/t31.jpg',
      quote: '"It is clearly the most advanced ionizer on the market..."',
      fullTestimonial: '"It is clearly the most advanced ionizer on the market. I am impressed with the technology and the results."'
    },
    {
      name: 'Mary Papa',
      title: 'Satisfied Customer',
      thumbnail: '/images/t32.jpg',
      quote: '"I have been using the alkaline water system for over 5 years..."',
      fullTestimonial: '"I have been using the alkaline water system for over 5 years and I can honestly say it has been one of my best decisions."'
    },
    {
      name: 'LeAnne Whitaker',
      title: 'Satisfied Customer',
      thumbnail: '/images/t33.jpg',
      quote: '"I noticed immediately that I had more energy..."',
      fullTestimonial: '"I noticed immediately that I had more energy after drinking the ionized water. I feel healthier and more active now."'
    },
    {
      name: 'B. Kaiser',
      title: 'Satisfied Customer',
      thumbnail: '/images/t34.jpg',
      quote: '"It was also much less expensive than a lot of the other brands..."',
      fullTestimonial: '"It was also much less expensive than a lot of the other brands, but the quality and results are excellent. Highly recommended!"'
    },
    {
      name: 'Sandra Simpson',
      title: 'Satisfied Customer',
      thumbnail: '/images/t36.jpg',
      quote: '"This machine offers so much by comparison to others..."',
      fullTestimonial: '"This machine offers so much by comparison to others. I am extremely happy with my purchase and the water quality is amazing."'
    },
    {
      name: 'Elmagene Dorsett',
      title: 'Satisfied Customer',
      thumbnail: '/images/t37.jpg',
      quote: '"I am 84 years old, in good health and enjoy life..."',
      fullTestimonial: '"I am 84 years old, in good health and enjoy life. I truly believe the alkaline water has supported my overall wellness."'
    },
    

  ];

  selectedReview: Review | null = null;

  constructor() { }

  ngOnInit(): void {}

  openTestimonial(review: Review) {
    this.selectedReview = review;
  }

  closeTestimonial() {
    this.selectedReview = null;
  }
}
