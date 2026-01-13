import { Routes } from '@angular/router';
import { Home } from './home/home';
import { WaterSystems } from './water-systems/water-systems';
import { Compaison } from './compaison/compaison';
import { Learn } from './learn/learn';
import { Studies } from './learn/studies/studies';
import { Videos } from './learn/videos/videos';
import { Blog } from './learn/blog/blog';
import { Support } from './learn/support/support';
import { FreeWaterReport } from './learn/free-water-report/free-water-report';


export const routes: Routes = [
  { path: '', component: Home },

 
  { path: 'water-systems', component: WaterSystems },
  
  { path:'compaison', component: Compaison },

  {
    path: 'learn',
    component: Learn,
    children: [
      { path: 'studies', component: Studies },
      { path: 'videos', component: Videos },
      { path: 'blog', component: Blog },
      { path: 'support', component: Support },
      { path: 'free-water-report', component: FreeWaterReport },
      { path: '', redirectTo: 'studies', pathMatch: 'full' }
    ]
  }
];