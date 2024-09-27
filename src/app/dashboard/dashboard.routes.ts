import { Routes } from '@angular/router';
import { CuadrillaComponent } from './cuadrilla/cuadrilla.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { ResultsComponent } from './results/results.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cuadrilla', component: CuadrillaComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'results', component: ResultsComponent },
];
