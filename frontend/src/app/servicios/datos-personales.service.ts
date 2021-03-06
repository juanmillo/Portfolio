import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private http:HttpClient) { }
  obtenerDatosPersona():Observable<any> {
   return this.http.get('./assets/datafalsa/datos-personales.json');
  }
}
