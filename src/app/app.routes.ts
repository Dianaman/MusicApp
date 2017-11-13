import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingComponent } from './sing/sing.component';
import { FeelComponent } from './feel/feel.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feel', component: FeelComponent },
  { path: 'sing', component: SingComponent },
  { path: '**', redirectTo: '/home' }
];