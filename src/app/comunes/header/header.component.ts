import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textofinal:any;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  cargar(texto:any){
    this.textofinal= texto;
  }

  buscar(){
    this.route.navigate(['/busqueda/', this.textofinal]);
  }

  regresar(){
    this.route.navigate(['/heroes'])
  }

}
