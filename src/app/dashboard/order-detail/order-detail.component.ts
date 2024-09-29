import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/dataService/data-service.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent {
  datos: any = {};

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    const datosGuardados = localStorage.getItem('buscar_reporte_cuadrilla');
    this.datos = datosGuardados ? JSON.parse(datosGuardados) : null;

    console.log(
      'Aqui esta el numero de cuadrilla para la API',
      this.datos.num_cuadrilla
    );
  }
}
