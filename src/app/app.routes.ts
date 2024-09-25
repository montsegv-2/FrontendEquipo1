import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la ruta vacía a 'home'
  { path: 'login', component: LoginComponent }, // Ruta para el componente Login
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el componente Dasboard
];
