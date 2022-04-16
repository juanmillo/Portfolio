import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  persona:any;

  constructor(private servicioDatosPersonales:DatosPersonalesService) { }

  ngOnInit(): void {
    this.servicioDatosPersonales.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.persona=data["persona"];
    } )
  }

}
