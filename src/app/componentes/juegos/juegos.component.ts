import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NombreJuegoService } from '../../servicios/nombre-juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  juegoSeleccionado: string;
  constructor(private title:Title, private nombreJuego: NombreJuegoService) { }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Juegos");
    this.juegoSeleccionado = this.nombreJuego.leerJuego();
  }

  cambiarJuego(juego:string){
    this.juegoSeleccionado=juego;
  }





}
