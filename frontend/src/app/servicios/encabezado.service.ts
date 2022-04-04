import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  constructor(private http:HttpClient) {
    console.log("A ver si funca...");
   }

   obtenerDatosEncabezado():Observable<any>{
     return this.http.get('./assets/datafalsa/encabezado.json');
   }
}
