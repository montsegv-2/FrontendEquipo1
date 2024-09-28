import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private datos: any = {}; // Cambia `nombre` a un objeto

  constructor() {}

  // Establecer los datos (objeto JSON) y guardarlos en localStorage
  setDatos(datos: any) {
    this.datos = datos;
    localStorage.setItem('datos', JSON.stringify(datos)); // Guardar en localStorage
  }

  // Obtener los datos
  getDatos(): any {
    const datosGuardados = localStorage.getItem('datos');
    return datosGuardados ? JSON.parse(datosGuardados) : null; // Obtener desde localStorage
    // return this.datos;
  }

  // Limpiar los datos de localStorage
  clearDatos() {
    localStorage.removeItem('datos'); // Eliminar del localStorage
  }
}
