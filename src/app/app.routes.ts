import { Routes } from '@angular/router';
import { Home } from './home/home';
import { WaterSystems } from './water-systems/water-systems';
import { Compaison } from './compaison/compaison';


export const routes: Routes = [
  { path: '', component: Home },

 
  { path: 'water-systems', component: WaterSystems },
  
  { path:'compaison', component: Compaison }
   
];