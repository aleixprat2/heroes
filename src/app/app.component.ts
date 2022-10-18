import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'practica3';

  mensaje="Hay saldo";
  visualizaDiv=true;

  array = [
    {
      nombre:'pedro',
      apellido:'hola'
    },
    {
      nombre: 'raul',
      apellido:'adios'
    },
    {
      nombre:'marta',
      apellido:'quetal'   
    },
    {
      nombre: 'julia',
      apellido:'klk'
    },
    {
      nombre: 'bobby',
      apellido:'ciao'
    }];

  visualiza(){
    this.visualizaDiv = !this.visualizaDiv
  }
}
