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

export const routes: Routes = [
  { path: '', component: Home },

 
  { path: 'water-systems', component: WaterSystems },
  
  { path:'compaison', component: Compaison },
  { path: 'finance', component: Finance },

  {path:'aboutus', component:Aboutus},


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