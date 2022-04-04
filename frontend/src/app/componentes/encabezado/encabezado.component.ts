import { Component, OnInit } from '@angular/core';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  encabezado:any;
  constructor(private miServicio:EncabezadoService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEncabezado().subscribe(data =>{
      console.log(data);
      this.encabezado=data["encabezado"];
    })
  }

}
