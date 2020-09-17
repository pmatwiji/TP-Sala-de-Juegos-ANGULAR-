import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.scss']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  ocultarEspera: boolean;
  ocultarGano: boolean;
  ocultarPerdio: boolean;

  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;

  primerNumero: number = null;
  segundoNumero: number = null;
  operadores=['+','-','*','/'];
  operador:string; 
  resultado:number;
  respuesta:string;

  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.ocultarEspera=true;
     this.ocultarGano=true;
     this.ocultarPerdio=true;
     this.Tiempo=10; 
     this.nuevoJuego = new JuegoAgilidad();
     //console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.ocultarVerificar=false;
    this.ocultarEspera=false;
    this.primerNumero = Math.floor(Math.random()* (11 - 1)) + 1;
    this.segundoNumero = Math.floor(Math.random()* (11 - 1)) + 1;
    this.operador = this.operadores[Math.floor(Math.random()* (4 - 0)) ];

    this.resultado= this.cuenta(this.primerNumero,this.segundoNumero,this.operador);

    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
    if(this.Tiempo==0 ) {
      clearInterval(this.repetidor);
      this.verificar();
      this.ocultarVerificar=true;
      this.Tiempo=5;
      this.respuesta= "";
      }
    }, 1000);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    this.ocultarEspera=true;
    clearInterval(this.repetidor);

    if(this.resultado === parseInt(this.respuesta)){
      this.ocultarGano=false;
      this.Tiempo=0;

      setTimeout(() => {
        this.ocultarVerificar=true;
        this.ocultarGano=true;
        this.ocultarEspera=true;
        this.primerNumero = null;
        this.segundoNumero= null;
        this.operador="";
        this.respuesta= "";
        this.Tiempo=10;
      }, 2000);
    }else{
      this.ocultarPerdio=false;
      this.Tiempo=0;

      setTimeout(() => {
        this.ocultarVerificar=true;
        this.ocultarGano=true;
        this.ocultarEspera=true;
        this.ocultarPerdio=true;
        this.primerNumero = null;
        this.segundoNumero= null;
        this.operador="";
        this.respuesta= "";
        this.Tiempo=10;
      }, 2000);
    }

    
   

   
  }  

  cuenta(primerNum,segundoNum,operador){
    let resultado;
    switch(operador){
      case '+':
        resultado = primerNum + segundoNum;
      break;
      case '-':
        resultado = primerNum - segundoNum;
      break;
      case '*':
        resultado = primerNum * segundoNum;
      break;
      case '/':
        resultado = primerNum / segundoNum;
      break;
    }
    return resultado;
  }

}
