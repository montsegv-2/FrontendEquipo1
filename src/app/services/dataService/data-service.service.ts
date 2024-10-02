import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  // private datos: any = {}; // Cambia `nombre` a un objeto

  constructor(private http: HttpClient) {}

  private UrlPuntosCuadrillaIndividual =
    'https://api2hack.azurewebsites.net/api/PuntosCuadrilla';
  private UrlPuntosTecnico = 'https://api2hack.azurewebsites.net/api/PuntosTecnico';
  private UrlAllCuadrillas = 'https://api2hack.azurewebsites.net/api/PuntosAllCuadrillas';

  getDataCuadrillaIndividual(id_cuadrilla: number): Observable<any> {
    return this.http.get<any>(
      `${this.UrlPuntosCuadrillaIndividual}/${id_cuadrilla}`
    ); // Usa parámetros de consulta
  }

  getDataPuntosTecnico(id_tecnico: number): Observable<any> {
    return this.http.get<any>(`${this.UrlPuntosTecnico}/${id_tecnico}`); // Usa parámetros de consulta
  }

  getDataAllCuadrillas(): Observable<any> {
    return this.http.get<any>(this.UrlAllCuadrillas);
  }
}
