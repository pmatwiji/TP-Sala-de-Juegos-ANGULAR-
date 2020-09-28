import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  botonJuego:boolean= false;
  @Output() cambiarJuegoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  btnMenuJuegos(){
    this.botonJuego=!this.botonJuego;
  }

  cerrar(){
    this.botonJuego=false;
  }

  cambiarJuego(juego:string){
    this.cambiarJuegoEvent.emit(juego);
  }



}
