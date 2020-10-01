import { Component, OnInit } from '@angular/core';
import { ResultadosService } from "../../servicios/resultados.service";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {

  constructor(private resultados: ResultadosService) { }

  ngOnInit() {
  }

  palabras=['ficha','boton','palanca','moneda','pantalla','peluche','premio','ganador','perdedor','trofeo'];
  palabraSeleccionada:string = "";
  palabraSeparada;
  palabraDesordenada;
  juegoNuevo:boolean = false;
  respuesta: string = '';
  ganador: boolean = false;
  perdedor:boolean = false;

  nuevaPalabra(){
    this.juegoNuevo=true;
    this.palabraSeleccionada=this.palabras[Math.floor(Math.random() * (10 - 0))+ 0];
    this.palabraSeparada = this.palabraSeleccionada.split('');
    this.palabraDesordenada = this.palabraSeparada.sort(function() {
      return Math.random() -0.5      
    })


  }

  verificar(){
    document.querySelector('#enviar').setAttribute('disabled','true');
    if(this.palabraSeleccionada == this.respuesta.toLocaleLowerCase()){
      this.ganador= true;
      this.resultados.guardarResultado('anagrama','gano');
    }else{
      this.perdedor = true;
      this.resultados.guardarResultado('anagrama','perdio');
    }

    setTimeout(() => {
      this.reset();
    }, 3000);
  }

  reset(){
    this.palabraSeleccionada= "";
    this.juegoNuevo = false;
    this.ganador = false;
    this.perdedor = false;
    this.respuesta= "";
    document.querySelector('#enviar').removeAttribute('disabled');
  }

}
