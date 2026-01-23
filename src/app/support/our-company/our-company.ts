import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-company',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './our-company.html',
  styleUrl: './our-company.css'
})
export class OurCompany {
  technologies = [
    {
      title: 'Live Hydrogen Technology XL™',
      description: 'Up to 2x more dissolved hydrogen than competitors, with longer stability for true therapeutic impact.'
    },
    {
      title: 'Whole House Hydrogen Systems',
      description: 'The only system that delivers hydrogen-rich water through every tap —for drinking, bathing, cooking, and wellness throughout your home.'
    },
    {
      title: 'Dual Filtration (Internal + External)',
      description: 'Removes chlorine, PFAS, bacteria, heavy metals, and emerging contaminants with medical-grade precision.'
    },
    {
      title: 'SmartFlow™ Digital Interface',
      description: 'Real-time auto-adjustment of flow and voltage for optimal pH and hydrogen output.'
    },
    {
      title: 'Advanced Matrix Grid Platinum-Coated Plates',
      description: 'Maximizes efficiency, hydrogen production, and system longevity.'
    },
    {
      title: 'HOCl-Ready',
      description: 'Generate safe, non-toxic hypochlorous acid for natural sanitization.'
    },
    {
      title: 'EcoSmart Design',
      description: 'Low waste, recyclable components, and energy-efficient operation.'
    }
  ];

  promises = [
    {
      title: 'Lifetime Warranty on core components'
    },
    {
      title: 'U.S.-Based Support',
      description: 'Real people, real answers'
    },
    {
      title: 'Local Water Customization',
      description: 'No guesswork'
    },
    {
      title: 'Educational Integrity',
      description: 'Science over hype'
    },
    {
      title: 'Community Commitment',
      description: 'Special programs for veterans, wellness professionals, and eco-conscious homes'
    }
  ];

  technologyImage = '/images/Our_Technology.webp';
  promiseImage = '/images/Our_Promise.webp';
}
