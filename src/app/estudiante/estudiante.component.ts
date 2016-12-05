import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Alumno } from '../datos/datosestu';

@Component({
  selector: 'estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  private estuMatricula:Alumno;

  constructor(private http:Http) {
      
      this.estuMatricula = new Alumno();

   }

  ngOnInit() {
  }

   public datosMatricula(){
     
      this.http.post(
          "",
          this.estuMatricula
      ).subscribe((response)=>{
          let respuesta = response.json();
          if(respuesta.resultado == 1){
            alert('Estudiante ingresado');
          }else{
            alert('Datos no registrados');
          }

      });
   

   } 


}


