import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) {}
    obtenerDatosExperiencia():Observable<any>{
      return this.http.get('./assets/datafalsa/experiencia.json');
   }
}
