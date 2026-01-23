import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Certifications',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certifications = [
    {
      image: '/images/websiterep.webp',
      label: 'Website Reputation'
    },
    {
      image: '/images/ukas.webp',
      label: 'UKAS Quality Management'
    },
    {
      image: '/images/pdr.webp',
      label: 'Physicians\' Desk Reference'
    },
    {
      image: '/images/greenbusiness.webp',
      label: 'Green Business Certified'
    },
    {
      image: '/images/kgmp.webp',
      label: 'Korean Good Manufacturing Practice'
    },
    {
      image: '/images/pac.webp',
      label: 'People Against Cancer'
    },
    {
      image: '/images/iofs.webp',
      label: 'International Organization for Standardization'
    },
    {
      image: '/images/ce.webp',
      label: 'European Conformity'
    },
    {
      image: '/images/kipo.webp',
      label: 'Korean Intellectual Property Office'
    },
    {
      image: '/images/fraudamex.webp',
      label: 'Fraud Protection Guaranteed – AX'
    },
    {
      image: '/images/kfda.webp',
      label: 'Korea Food & Drug Administration'
    },
    {
      image: '/images/iic.webp',
      label: 'ISO Certification Body'
    }
  ];

  definitions = [
    {
      title: 'CE',
      description: 'The CE marking is a mandatory conformity mark on many products placed on the single market in the European Economic Area (EEA). The CE marking certifies that a product has met EU consumer safety, health or environmental requirements.'
    },
    {
      title: 'KFDA',
      description: 'The Korean equivalent to the U.S. FDA.'
    },
    {
      title: 'Japanese Ministry of Health',
      description: 'The Japanese equivalent to the U.S. FDA.'
    }
  ];
}
