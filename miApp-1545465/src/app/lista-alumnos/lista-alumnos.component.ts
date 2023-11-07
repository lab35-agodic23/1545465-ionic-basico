import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from 'src/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  // props
  result: string = '';

  // method
  agregaAlumno(): void {
      this.alumnos.push(this.alumno);

      this.alumno = {
        nombre: '',
        presente: false
      }
  }

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];

}
