import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-facts',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './water-facts.html',
  styleUrl: './water-facts.css'
})
export class WaterFACTS {
  facts = [
    {
      title: 'About pH and ORP',
      description: 'They are measurements of some of the most important properties of drinking water. Learn about how pH and ORP influence the quality of water, and what kind of water a water ionizer makes.',
      link: 'Continue reading about pH and ORP...',
      image: '/images/phandorp.avif'
    },
    {
      title: 'The Acidity in the Body',
      description: 'The tissues and tissues of the body have varied pH levels, some are alkaline, and others are acidic. Some studies point to a link between acidity in the body and health problems. Learn about how acidity may affect the body.',
      link: 'Continue reading about acidity in the body...',
      image: '/images/acidity-in-body.avif'
    },
    {
      title: 'Alkaline Water Benefits',
      description: 'Alkaline water is relatively new to the US; most of the research done on alkaline water benefits has been done in Japan. Learn about some of the most promising research, what it reveals, and what remains to be studied.',
      link: 'Continue reading about alkaline water benefits...',
      image: '/images/alkaline-water-benefits.avif'
    },
    {
      title: 'The Facts About Bottled Water',
      description: 'Bottled water can cost up to 200x more than tap water and may actually be nothing more than filtered tap water! One study done by the Environmental Working Group found toxins in 10 popular brands of bottled water.',
      link: 'Continue reading about bottled water...',
      image: '/images/bottled-water.avif'
    },
    {
      title: 'Proper Hydration',
      description: 'Learn about the three-step process that LIFE Ionizers uses to filter and ionize water. To make sure the water you get is as clean as possible; every LIFE Ionizer includes a free pre-filter which is configured based on the toxins we find in your local water quality report.',
      link: 'Continue reading about proper hydration...',
      image: '/images/proper-hydration.avif'
    },
    {
      title: 'How Ionizers Work',
      description: 'Proper hydration is essential for good health. Get the facts on hydration including how much you should drink. Athletes benefit from proper hydration as well. Studies on hydration have shown that as little as 2% dehydration impairs athletic performance.',
      link: 'Continue reading about how ionizers work...',
      image: '/images/how-ionizers-work.avif'
    },
    {
      title: 'What is Acidic Water?',
      description: 'Acidic water has a pH of below 7. Acidic water is used externally, for hair and skin rather than consumed. Strong acidic water can be used to sanitize kitchen counters, cutting boards, and other surfaces.',
      link: 'Continue reading about what acidic water is...',
      image: '/images/acidic-water.avif'
    },
    {
      title: 'What is Alkaline Water?',
      description: 'Alkaline water has been consumed in Asia for decades to improve health. Discover the facts about alkaline water based on the latest research, and learn what the Mayo Clinic has to say about it.',
      link: 'Continue reading about what alkaline water is...',
      image: '/images/alkaline-water.avif'
    },
    {
      title: 'What is Ionized Water?',
      description: 'There are two kinds of ionized water; ionized alkaline water and ionized acidic water. De-ionized water has no minerals in it, and it can\'t be ionized. It is made using distillation or reverse osmosis.',
      link: 'Continue reading about what ionized water is...',
      image: '/images/ionized-water.avif'
    }
  ];
}
