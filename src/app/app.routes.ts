import { Routes } from '@angular/router';
import { Home } from './home/home';
import { WaterSystems } from './water-systems/water-systems';
import { Compaison } from './compaison/compaison';
import { Learn } from './learn/learn';
import { Studies } from './learn/studies/studies';
import { VideosComponent } from './learn/videos/videos';
import { BlogComponent } from './learn/blog/blog';
import { Support } from './learn/support/support';
import { FreeWaterReport } from './learn/free-water-report/free-water-report';
import { Finance } from './finance/finance';

import { Aboutus } from './aboutus/aboutus';

import { BlogDetailComponent } from './learn/blog-detail/blog-detail';
import { TestimonialsComponent } from './testimonials/testimonials';
import { CustomerComponent } from './customers/customers';
import { HealthcareComponent } from './healthcare/healthcare';
import { ActorComponent } from './actors/actors';
import { AthleteComponent } from './athletes/athletes';

import { ContactComponent } from './contact/contact';

import { Certifications } from './support/certifications/certifications';
import { OurCompany } from './support/our-company/our-company';
import { WaterFACTS } from './support/water-facts/water-facts';
import { BussinessOpportunities } from './support/bussiness-opportunities/bussiness-opportunities';
import { ProductDetails } from './product.details/product.details';
import { IonizerFilterDetails } from './product.details/ionizer-filter-details/ionizer-filter-details';
import { WaterSystemDetails } from './product.details/water-system-details/water-system-details';


export const routes: Routes = [
  { path: '', component: Home },

  { path: 'product-details', component: ProductDetails },
 
  { path: 'water-systems', component: WaterSystems },
  
  { path:'compaison', component: Compaison },
  { path: 'finance', component: Finance },

  {path:'aboutus', component:Aboutus},

  {path:'support', component:Support},
  {path:'contact', component:ContactComponent},
  {
  path: 'product/ionizer/:id',
    loadComponent: () =>
      import('./product.details/ionizer-filter-details/ionizer-filter-details')
        .then(m => m.IonizerFilterDetails)
  },
  {
    path: 'product/water-system/:id',
    loadComponent: () =>
      import('./product.details/water-system-details/water-system-details')
        .then(m => m.WaterSystemDetails)
  },
  {
  path: 'water-systems',
  loadComponent: () =>
    import('./water-systems/water-systems')
      .then(m => m.WaterSystems),
},
// { path: 'product/:id', component: ProductDetails },
  {
    path: 'product-details',
    loadComponent: () =>
      import('./product.details/product.details').then(m => m.ProductDetails),
  },
//  { path: '', redirectTo: '/', pathMatch: 'full' },
// {path: 'lonizer-filters', component: IonizerFilterDetails},

{
  path: 'support',
  component: Support,
  children: [
    { path: '', redirectTo: 'certifications', pathMatch: 'full' },
    { path: 'certifications', component: Certifications },
    { path: 'our-company', component: OurCompany },
    { path: 'water-facts', component: WaterFACTS },
    { path: 'business-opportunities', component: BussinessOpportunities }
  ]
}
,

      { path: 'support/certifications', component: Certifications },
      { path: 'support/our-company', component: OurCompany },
      { path: 'support/water-facts', component: WaterFACTS },
      { path: 'support/bussiness-opportunities', component: BussinessOpportunities },

  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'actors', component: ActorComponent },
  { path: 'athletes', component: AthleteComponent },
  {
    path: 'learn',
    component: Learn,
    children: [
      { path: 'studies', component: Studies },
      { path: 'videos', component: VideosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:slug', component: BlogDetailComponent },
      { path: 'support', component: Support },
      { path: 'free-water-report', component: FreeWaterReport },
      { path: '', redirectTo: 'studies', pathMatch: 'full' }
    ]
    
  }
];
