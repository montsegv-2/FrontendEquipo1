import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/dataService/data-service.service';

interface Cuadrillas {
  num_tecnico: number;
  nombre_tecnico: string;
  num_cuadrilla: number;
  trabajo_realizado: string;
  servicio: string;
  puntos_generados: number;
  total_puntos_tecnico: number;
  estatus: string;
  num_suscriptor: number;
  fecha: Date;
  valorPago: number;
}
@Component({
  selector: 'app-general-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-report.component.html',
})
export class GeneralReportComponent implements OnInit {
  datos: any = {};
  elementos = [1, 2, 3, 4, 5];
  showBodies: boolean[] = [];
  lista: any = {};

  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.showBodies = new Array(this.elementos.length).fill(false);

    // Agrupamos los técnicos por cuadrilla
    const AllCuadrillas = this.dataService.getDataAllCuadrillas();

    const cuadrillasArray = Array.isArray(AllCuadrillas)
      ? AllCuadrillas
      : Object.values(AllCuadrillas);

    const agrupadosPorCuadrilla = cuadrillasArray.reduce((acumulador, item) => {
      const cuadrilla = item.cuadrilla;

      if (!acumulador[cuadrilla]) {
        acumulador[cuadrilla] = [];
      }

      acumulador[cuadrilla].push(...item.tecnicos);
      return acumulador;
    }, {});

    // Convertimos el objeto resultante a un array si es necesario
    const listaPorCuadrilla = Object.entries(agrupadosPorCuadrilla).map(
      ([cuadrilla, tecnicos]) => ({
        cuadrilla: parseInt(cuadrilla, 10),
        tecnicos,
      })
    );

    console.log(listaPorCuadrilla);
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
