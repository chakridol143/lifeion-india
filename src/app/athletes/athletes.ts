import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface AthleteReview {
  name: string;
  profession: string;
  quote: string;
  fullTestimonial: string;
  achievements?: string;
}

@Component({
  selector: 'app-athlete',
  templateUrl: './athletes.html',
  imports:[CommonModule],
  styleUrls: ['./athletes.css']
})
export class AthleteComponent implements OnInit {

  reviews: AthleteReview[] = [
    {
      name: 'Paul Goldschmidt',
      profession: 'MLB Professional',
      quote: '"I did my research and decided to check out Life Ionizers…"',
      fullTestimonial: '"I try to keep things simple, and one of the simplest things you can do is try to stay healthy. That\'s why I decided to look into Life Ionizers. I\'d heard from other players that drinking alkaline water is an easy way to stay hydrated and healthy. So I did my research and decided to check out Life Ionizers. The water tastes great, and it makes great tasting coffee! I\'d definitely recommend Life Ionizers to anybody."'
    },
    {
      name: 'Karim Mayfield',
      profession: 'Professional Boxer',
      quote: '"I\'ve experienced a transformation in recovery…"',
      fullTestimonial: '"I\'ve experienced a transformation in recovery, new vigor, and better hydration in my training and everyday life."'
    },
    {
      name: 'Barry Zito',
      profession: 'MLB Professional',
      quote: '"Life Ionizers water ionizers enable me to stay on top of my game…"',
      fullTestimonial: '"Life Ionizers water filters & alkalizers enable me to stay on top of my game throughout both my arduous season and off-season cycles."'
    },
    {
      name: 'Dave Stewart',
      profession: 'MLB Professional',
      quote: '"I highly recommend Life Ionizer for your overall well being…"',
      fullTestimonial: '"I purchased a Life Ionizer for my Summer home and in just a short time I could tell the difference. My three Children now have them for their families and could not be happier. I highly recommend Life Ionizer for your overall well being."'
    },
    {
      name: 'Ángel Pagán',
      profession: 'MLB Professional',
      quote: '" I\'ve got energy, I\'ve got focus, and I feel healthy, that\'s important…"',
      fullTestimonial: '"The water truly tastes amazing, and I can feel the difference, on and off the field. I\'ve got energy, I\'ve got focus, and I feel healthy, that\'s important. That\'s why, if you want to feel like your on top of your game, I recommend LIfe Ionizers."'
    },
    {
      name: 'Raymond Floyd',
      profession: 'PGA Professional',
      quote: '"I feel energized, refreshed, and ready to go out there and give 100%…"',
      fullTestimonial: '"When I drink alkaline water from my Life Ionizers, I feel energized, refreshed, and ready to go out there and give 100%."'
    },
    {
      name: 'Jason Babin',
      profession: 'NFL Professional',
      quote: '"If you want to be on top of your game, my advice to you is to get a Life Ionizer…"',
      fullTestimonial: '"You really don\'t know how big a difference the right kind of water makes until you try it! I also feel better knowing that my family is drinking the cleanest water possible thanks to the custom filtration system that Life Ionizers provided with my ionizer. If you want to be on top of your game, my advice to you is to get a Life Ionizer."'
    },
    {
      name: 'Kevin Ollie',
      profession: 'NCAA HEAD Coach',
      quote: '"I recommend it to my team, my family, and you…"',
      fullTestimonial: '"To be truly at the top of my game, I need hydration and stamina. That\'s where I turn to my Life water Ionizer. The hydration it provides makes a big difference in my workouts and while I coach. I use and recommend Life Ionizers to my team, my family, and definitely for you."'
    },
    {
      name: 'Derek Lee',
      profession: 'MLB Professional',
      quote: '"I recommend using a Life Ionizer to anyone and everyone…"',
      fullTestimonial: '"Drinking the ionized alkaline mineral drinking water from my Life Ionizer has become an important part of my workouts" - World Series Champion (2003) - 2x All-Star selection (2005, 2007) - 2005 National League batting champion - 3x Gold Glove Award winner (2003, 2005, 2007)'
    },
    {
      name: 'Quentin Demps',
      profession: 'NFL Professional',
      quote: '"My performance on the field has definitely improved…"',
      fullTestimonial: '"My performance on the field has definitely improved since picking up my Life Ionizer, I\'ve never felt as invigorated or energized before I started drinking this water. It\'s great!"'
    },
    {
      name: 'Marc Mariani',
      profession: 'NFL Professional',
      quote: '"Life ionizers changed the way I look at my drinking water…"',
      fullTestimonial: '"I use the LIFE Ionizer every day and it has become an essential part of my daily regiment on and off the field!" - 2011 NFL Pro-Bowler - NFL Pro Bowl Record for most return yards in a game (326) and most returns (9)'
    },
    {
      name: 'James Bishop',
      profession: 'AA Baseball Player',
      quote: '"Best water before, during and after my workouts…"',
      fullTestimonial: '"As a professional athlete for thirteen years and now a high school coach, I swear by Life Ionizers. I encourage everyone to start drinking the water immediately."'
    },
    {
      name: 'Curtis Marsh',
      profession: 'NFL Professional',
      quote: '"The best water I\'ve ever had for sports performance…"',
      fullTestimonial: '"My Life Ionized water comes with me everyday to the locker room and out to the field. Thank you life ionizers!"'
    },
    {
      name: 'Edgar Jones',
      profession: 'NFL Professional',
      quote: '"I found Life Ionizers\' alkaline water and was hooked from the start…"',
      fullTestimonial: '"As a professional football player, I am always looking out for my performance on and off the field. I found Life Ionizers\' alkaline water and was hooked from the start. Drinking the water always leaves me feeling fresher, energized, and generally on top of my game!"'
    },
    {
      name: 'Miguel Cotto',
      profession: 'Professional Boxer',
      quote: '"I love my Life Ionizers water filtration system…"',
      fullTestimonial: '"I love my Life ionizers water filtration system. With the heavy demands of very intense training periods I have rely heavily on quality sources of water. Life ionizers has become a very convenient and reliant aspect of my program." - 4x World Boxing Champion'
    },
    {
      name: 'Damian Jackson',
      profession: 'MLB Professional',
      quote: '"Life Ionizers alkaline ionized water has become my \'go-to\' water…"',
      fullTestimonial: '"Alkaline water from my LIFE Ionizer has become a vital part of my daily routine and I encourage you to try it and see what it does for you!"'
    },
    {
      name: 'Ryan Dempster',
      profession: 'MLB Professional',
      quote: '"I look for the best products out there and I\'ve found that in Life Ionizers…"',
      fullTestimonial: '"As a professional athlete, husband and father I look for the best products out there and I have found that in Life Ionizer water filtration systems. I know I will benefit from the product and, just as important, so will my my growing family. I would highly recommend these products."'
    },
    {
      name: 'Geoff Geary',
      profession: 'MLB Professional',
      quote: '"Life Ionizers quickly became a key part of my game and my performance…"',
      fullTestimonial: '"As a professional baseball player I know that what I do off the field can predict how I perform on the field. My LIFE Alkaline Water Ionizer is the most important part of my off field regimen. From high school all the way through my 10+ years of major league baseball I have used all sorts of supplements and routines to keep my performance on the mound at peak level, but I like my Life Ionizers best."'
    },
    {
      name: 'Cecil Fielder',
      profession: 'MLB Professional',
      quote: '"Life really is the best of the best when it comes to water filtration…"',
      fullTestimonial: '"Life really is the best of the best when it comes to water filtration Click here to check out the awesome video testimonial Cecil Fielder has done for Life Ionizers."'
    },
    {
      name: 'Jordan Pacheco',
      profession: 'MLB Professional',
      quote: '"Life Ionizers alkaline ionized water has become my \'go-to\' water…"',
      fullTestimonial: '"Alkaline water from my LIFE Ionizer has become a vital part of my daily routine and I encourage you to try it and see what it does for you!"'
    },
    {
      name: 'Joe Duarte',
      profession: 'MMA Professional',
      quote: '"As an athlete, I find no water better than alkaline water by Life…"',
      fullTestimonial: '"I was introduced to Alkaline water by my teammate Diego Sanchez (UFC Fighter) a couple years back. Since then I have always made a conscious effort to only use water with a PH level of 9.5. As an athlete, I find no water better than the alkaline water from my Life Ionizer. After all, our bodies are made up of an average 60-70% water. With that being said, the right water is extremely important."'
    },
    {
      name: 'Gordy Gilbert',
      profession: 'Professional Soccer Player',
      quote: '"Gordy became familiar with the tremendous benefits of Life Ionizers…"',
      fullTestimonial: '"As a high performance soccer athlete, Gordy was looking for that extra edge! While in Europe, Gordy became familiar with the benefits of drinking alkaline water. Upon his return to South Africa to take up his position with MP Black Aces he immediately got in touch with us to ensure he could get Alkaline Ionized Mineral Water all day long every day!"'
    },
    {
      name: 'Alun-Wyn Jones',
      profession: 'Professional Rugby Player',
      quote: '"I fill up two of the large 2.2L Life Ionizer water bottles and I\'m set for the day…"',
      fullTestimonial: '"Since I started using my Life Ionizer 9000; it has become a part of my daily routine, I fill up two of the large 2.2L Life Ionizer water bottles and I\'m set for the day, before during and after training."'
    },
    {
      name: 'Dotsie Bausch',
      profession: 'Professional Cyclist',
      quote: '"I love my Life Ionizer and drinking alkaline water…"',
      fullTestimonial: '"Drinking alkaline water over the past month has really made a difference for me. I had a hydration saturation test done pre and post alkaline water consumption and the numbers don\'t lie. I love my Life Ionizer and alkaline water! Thanks so much!" - Pan American Gold Medalist - 5x National Champion - Former World Record Holder'
    },
    {
      name: 'David Quessenberry',
      profession: 'NFL Professional',
      quote: '"I have always seen hydration as a critical element of my performance, and after"',
      fullTestimonial: '"I have always seen hydration as a critical element of my performance, and after I received my Life Ionizer I noticed an immediate positive impact. Their pure and Ionized water that helps me recover faster and perform at my best day in and day out during the NFL season. A no brainer for any athlete looking to maximize peak performance."'
    }
  ];

  selectedReview: AthleteReview | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  openTestimonial(review: AthleteReview) {
    this.selectedReview = review;
  }

  closeTestimonial() {
    this.selectedReview = null;
  }
}
