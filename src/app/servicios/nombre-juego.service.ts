import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreJuegoService {

  juegoSeleccionado:string;

  constructor() { }

  seleccionarJuego(juego:string) {
    return  this.juegoSeleccionado= juego;
  }

  leerJuego(){
    return this.juegoSeleccionado;
  }
}
