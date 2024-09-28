import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/dataService/data-service.service';

@Component({
  selector: 'app-general-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-report.component.html',
})
export class GeneralReportComponent {
  datos: any = {};
  elementos = [1, 2, 3, 4];
  showBodies: boolean[] = [];
  empleados = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Ana Gómez' },
    { id: 3, nombre: 'Carlos López' },
    { id: 4, nombre: 'María Sánchez' },
    { id: 5, nombre: 'Luis Martínez' },
  ];
  ordenes = [
    { id: 1, fecha: '2024-09-25', suscriptor: 'Juan Pérez', puntos: 150 },
    { id: 2, fecha: '2024-09-26', suscriptor: 'Ana Gómez', puntos: 75 },
    { id: 3, fecha: '2024-09-27', suscriptor: 'Carlos López', puntos: 20 },
  ];

  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}

  ngOnInit() {
    this.showBodies = new Array(this.elementos.length).fill(false);
  }

  toggleBody(index: number): void {
    this.showBodies[index] = !this.showBodies[index];
  }

  irADetalle(cuadrilla: number): void {
    const datos = {
      num_cuadrilla: cuadrilla,
    };

    localStorage.setItem('datos_reporte_general', JSON.stringify(datos));
    this.router.navigate(['/dashboard/general-detail']);
  }
}
