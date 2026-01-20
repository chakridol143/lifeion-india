import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Review {
  name: string;
  title: string;
  quote: string;
  fullTestimonial: string;
  image?: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customers.html',imports:[CommonModule],
  styleUrls: ['./customers.css']
})
export class CustomerComponent implements OnInit {
  
  reviews: Review[] = [
    {
      name: 'Rebecca Stevens',
      title: 'Satisfied Customer',
      quote: '"Great product for anyone wanting to improve their overall health…"',
      fullTestimonial: '"This is me with my Aussie Bailey. I\'ve been using my M7 for about a year now & love it! I\'ve noticed better recovery time with my race walking, less need for digestive supplements with meals and general wellness. I plan to begin giving to my dog also for her general health. Great product for anyone wanting to improve their overall health!"'
    },
    {
      name: 'Marisa Zeppieri Caruna',
      title: 'Satisfied Customer, Board Member of Lupus Foundation of America',
      quote: '"I can\'t imagine life without my Life Ionizer…"',
      fullTestimonial: '"My husband and I have been using our Life Ionizer for several months and are thrilled with the benefits. The machine provides water that tastes incredible and has been phenomenal in terms of removing toxins and dirt in our produce. We juice several times per day and soak our vegetables in the water from our machine. We noticed from the very first time how much better the juice tastes! Within just a few minutes of soaking, you can see the water becomes dark as it removes the impurities. This is a huge help for someone like me whose body and immune system is already not working properly –now my body doesn\'t have to take on extra chemicals and toxins, because the Life Ionizer removes them for me. We soak the majority of our food of before we eat or cook. We both cannot imagine going back to drinking regular tap or bottled water ever again. Even traveling for a few days makes us long to be home and close to our machine! I would recommend soaking your produce in alkaline water to anyone who wants to avoid toxins in their food. Out of everything I\'ve done, my Life Ionizer has been one of the best. With my body continuing to improve and get healthier, I cannot imagine life without my Life Ionizer-I feel like my body has been given the best gift it could have ever received."'
    },
    {
      name: 'Bacil Smith Sr.',
      title: 'Satisfied Customer',
      quote: '"I have been sharing this wonderful water with my friends…"',
      fullTestimonial: '"After just three days of drinking water from my new life ionizer… I have been sharing this wonderful water with my friends and can honestly say they are experience similar results as well."'
    },
    {
      name: 'Angelica Quezada',
      title: 'Satisfied Customer',
      quote: '"Aprovecho hasta el agua acida para mi cara…"',
      fullTestimonial: '"Me compre mi filtro el ano pasado y no dejo de maravillarme, de los beneficios, tanto a mi familia como a mi, por si no fuera poco me acabo de ganar 439.00 dlls. Por referir a una persona que compro el filtro. Me siento con mas energia, mis problemas digestivos se han acabado, estoy muy feliz y no me arrepiento de haberlo comprado, aprovecho hasta el agua acida para mi cara y cabello aaa y mis plantas… Gracias!"'
    },
    {
      name: 'Connie Fritsch',
      title: 'Satisfied Customer',
      quote: '"I also love my machine and the alkaline water for me, too…"',
      fullTestimonial: '"My husband is in stage four kidney failure and his doctor said alkaline water was one of the best things he could do for his kidney. I also love my machine and the alkaline water for me, too!"'
    },
    {
      name: 'Curtis Poirier',
      title: 'Satisfied Customer',
      quote: '"The Ionizer water really tastes great, we purchased the under counter unit…"',
      fullTestimonial: '"It sure is nice to use Ionizer water for everything. We can taste the difference when we make coffee. We drink a lot of coffee. The Ionizer water really tastes great. We purchased the under the counter machine. Lucky, we had a hole in the granite for the Ionizer. It was a neat first class installation. Thanks!"'
    },
    {
      name: 'David Wright',
      title: 'Satisfied Customer',
      quote: '"Life Ionizers uses an array of the latest advanced technology…"',
      fullTestimonial: '"I am a proponent for optimal wellness living and have spent many years learning about the science of the body, aging, and nutrition, and researching companies and products that provide the best technology and value for the masses. Water is an absolute necessity for the body to function properly. The chemistry of the water molecule is extremely interesting to say the least, but it leads to many different variables that could lead to water products that aren\'t optimized for utilization in the human body. Life Ionizers uses an array of the latest advanced technology to provide products that produce water that I find to be the most hydrating in the world. I am proud to be an owner of a Life Ionizer and look forward to a long life of ionized water to support my best health! Thank you!"'
    },
    {
      name: 'Ellie Liggett',
      title: 'Satisfied Customer',
      quote: '"I think that drinking it throughout the day is central…"',
      fullTestimonial: '"I don\'t own a \'Life ionizer but have tasted a friends ionized water many times;sometimes he brings me some, because he knows I love the fresh spring water taste of it. I think that drinking it throughout the day is central to keeping my body PH alkalinized. I know that an alkaline body is resistant to bacteria, virus, fungal and parasitic items that can be lurking in the nose, stomach or intestines. Feeling better after drinking it and avoiding all of the toxic material in tap water is very important to me. I\'d rather drink this than ice tea or soda because it tastes so good and its so healthy for my body. I know that would be true for you too. Buy one today if you can or if you can\'t, get a good friend to bring you some!"'
    },
    {
      name: 'Howard & Verna Campbell',
      title: 'Satisfied Customer',
      quote: '"Alkaline ionized water makes traveling a lot better for both of us…"',
      fullTestimonial: '"Hello, My wife and I have had our LIFE IONIZER 9000 for about two years, we have used it faithfully and find that when we travel my wife\'s legs and feet do not swell as they did before. Makes traveling a lot better for both of us."'
    }
  ];

  selectedReview: Review | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  openTestimonial(review: Review) {
    this.selectedReview = review;
  }

  closeTestimonial() {
    this.selectedReview = null;
  }
}
