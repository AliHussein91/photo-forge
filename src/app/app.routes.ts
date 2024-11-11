import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'resize', loadComponent: () => import('./items/items.module').then(c => c.ItemsModule},
    // {path: 'about', loadComponent: () => import('./items/items.module').then(c => c.ItemsModule},
    // {path: 'privacy', loadComponent: () => import('./items/items.module').then(c => c.ItemsModule},
    // {path: 'terms-of-service', loadComponent: () => import('./items/items.module').then(c => c.ItemsModule},
    {path: '**', redirectTo: ''},
];
