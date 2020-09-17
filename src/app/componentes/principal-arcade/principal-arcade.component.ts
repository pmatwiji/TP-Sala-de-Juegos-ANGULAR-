import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NombreJuegoService } from '../../servicios/nombre-juego.service';

@Component({
  selector: 'app-principal-arcade',
  templateUrl: './principal-arcade.component.html',
  styleUrls: ['./principal-arcade.component.scss']
})
export class PrincipalArcadeComponent implements OnInit {

  @Input() opcionSeleccionada: string;
  //@Output() juegoSeleccionadoEvento = new EventEmitter<string>();

  constructor(private nombreJuego: NombreJuegoService) { }

  ngOnInit(): void {
  }

  // verOpcion(opcion: string){
  //   this.opcionSeleccionada=opcion;
  //   console.log("tres: " + opcion);
  // }

  // seleccionarJuego(juego: string)
  // {
  //   this.juegoSeleccionadoEvento.emit(juego);
  //   console.log(juego);
  // }

  setearJuego(juego: string) {
    this.nombreJuego.seleccionarJuego(juego);
  }

}
