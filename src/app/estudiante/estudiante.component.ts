import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Alumno } from '../datos/datosestu.datos';

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

  public guardarEstudiante()
  {
    this.http.post(
      "http://proyectowebii.comlu.com/matricula/registromatricula.php",
      this.estuMatricula
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert("Matricula exitosa");
      }      
      else{
        alert("Error de datos ingresados");
      }

      })
   

   } 

    alumnosList:Array<Alumno> = new Array<Alumno>();
   
    buscarInstitucion(){
      this.http
      .get("http://proyectowebii.comlu.com/matricula/registromatricula.php")
      .subscribe((response)=>{
       this.alumnosList = response.json();
       console.log(this.alumnosList);
       let alumno = document.getElementById("modal_listado");
       alumno.style.visibility = "visible";
       

      });

    }


}






