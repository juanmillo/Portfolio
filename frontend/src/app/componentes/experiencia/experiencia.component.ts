import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  constructor(private experienciaService:ExperienciaService,private builderDelFormulario:FormBuilder) {
    this.form=this.builderDelFormulario.group({
      institucion:['',[Validators.required]],
      puesto:['',[Validators.required]],
      img:['./assets/imagenes/',[Validators.required]]
    })
   }

   get institucion(){
     return this.form.get ("institucion");
   }

  ngOnInit(): void {
    this.experienciaService.obtenerDatosExperiencia().subscribe(data=>{
      console.log(data);
      this.experiencia=data["experiencia"]
    }
    )
    
  }
  guardarExperiencia(){
    if (this.form.valid){
      alert("prueba guardar experiencia");
      this.form.reset();
      document.getElementById("cerrarModalExperiencia")?.click();
    }
    else{
      alert("Por favor, complete correctamente el formulario");
      this.form.markAllAsTouched();
    }
  }
}
