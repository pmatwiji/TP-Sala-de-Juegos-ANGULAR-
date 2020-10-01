import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ResultadosService } from "../../servicios/resultados.service";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.scss']
})
export class PiedraPapelTijeraComponent implements OnInit {

  opcionSeleccionada:string;
  opcionMaquina:string;
  opciones=['piedra','papel','tijera'];
  contadorJugador:number = 0;
  contadorMaquina:number = 0;
  mensaje:string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2,private resultados: ResultadosService) { }

  ngOnInit(): void {
  }

  @ViewChild('disabled', {static: true}) deshabilitar:ElementRef;
  @ViewChild('disabled2', {static: true}) deshabilitar2:ElementRef;
  @ViewChild('disabled3', {static: true}) deshabilitar3:ElementRef;

  seleccionar(opcion:string){
    this.opcionSeleccionada = opcion;
    this.opcionMaquina= this.opciones[Math.floor(Math.random()* (3 - 0))];
    
    this.deshabilitar.nativeElement.style.pointerEvents = 'none';
    this.deshabilitar2.nativeElement.style.pointerEvents = 'none';
    this.deshabilitar3.nativeElement.style.pointerEvents = 'none';

    switch(this.opcionSeleccionada){
      case 'piedra':
        if(this.opcionMaquina == 'papel'){
          this.contadorMaquina++;
        }else if(this.opcionMaquina == 'tijera'){
          this.contadorJugador++;
        }
      break;
      case 'papel':
        if(this.opcionMaquina == 'tijera'){
          this.contadorMaquina++;
        }else if(this.opcionMaquina == 'piedra'){
          this.contadorJugador++;
        }
      break;
      case 'tijera':
        if(this.opcionMaquina == 'piedra'){
          this.contadorMaquina++;
        }else if(this.opcionMaquina == 'papel'){
          this.contadorJugador++;
        }
      break;
    }

    if(this.contadorJugador == 3){
      this.mensaje='ganaste';
      this.resultados.guardarResultado('piedra,papel o tijera','ganaste');
      setTimeout(() => {
        this.contadorJugador= 0;
        this.contadorMaquina=0;
      }, 1000);
    } else if(this.contadorMaquina == 3){
      this.mensaje='perdiste';
      this.resultados.guardarResultado('piedra,papel o tijera','perdiste');
      setTimeout(() => {
        this.contadorJugador= 0;
        this.contadorMaquina=0;
      }, 2000);
    }
    

    setTimeout(() => {


      this.deshabilitar.nativeElement.style.pointerEvents = 'auto';
      this.deshabilitar2.nativeElement.style.pointerEvents = 'auto';
      this.deshabilitar3.nativeElement.style.pointerEvents = 'auto';
      this.opcionSeleccionada= "";
      this.opcionMaquina="";
      this.mensaje=""
      
      
    }, 2000);
    
  }

}
