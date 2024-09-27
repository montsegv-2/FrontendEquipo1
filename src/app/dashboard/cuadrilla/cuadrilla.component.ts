import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-cuadrilla',
  standalone: true,
  imports: [RouterLink, HeaderComponent, SidebarComponent],
  templateUrl: './cuadrilla.component.html',
  styleUrl: './cuadrilla.component.css',
})
export class CuadrillaComponent {}
