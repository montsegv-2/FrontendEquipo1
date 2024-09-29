import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Trabajo {
  id: number;
  descripcion: string;
  puntos: number;
}

interface DatosEmpleado {
  num_empleado: string;
  nombre: string;
  puntaje: number;
  dinero: number;
  trabajos: Trabajo[];
}

@Component({
  selector: 'app-employee-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css'],
})
export class EmployeeReportComponent implements OnInit {
  datos: DatosEmpleado | null = null;
  num_empleado: any = {}
  showBody: boolean = false;

  constructor() {}

  ngOnInit(): void {

    const datosGuardados = localStorage.getItem('buscar_reporte_empleado');
    this.num_empleado = datosGuardados ? JSON.parse(datosGuardados) : null;

    // Aquí normalmente cargarías los datos del empleado, por ejemplo, de un servicio
    this.datos = {
      num_empleado: this.num_empleado,
      nombre: 'Montse Aguilar',
      puntaje: 150,
      dinero: 30,
      trabajos: [
        { id: 1, descripcion: 'Instalación de equipo', puntos: 30 },
        { id: 2, descripcion: 'Mantenimiento', puntos: 25 },
        { id: 3, descripcion: 'Reparación', puntos: 40 },
        { id: 4, descripcion: 'Actualización de software', puntos: 20 },
        { id: 5, descripcion: 'Capacitación al cliente', puntos: 35 },
      ],
    };
  }

  toggleBody(): void {
    this.showBody = !this.showBody;
  }
}
