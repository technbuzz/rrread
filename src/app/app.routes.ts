import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(p => p.HomePage)
  },
  {
    path: 'create/:id',
    loadComponent: () => import('./create/create.page').then( p => p.CreatePage)
  },

];
