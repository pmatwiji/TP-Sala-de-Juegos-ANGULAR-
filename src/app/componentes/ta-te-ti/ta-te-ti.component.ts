import { Component, OnInit } from '@angular/core';
import { ResultadosService } from "../../servicios/resultados.service";


@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.scss']
})
export class TaTeTiComponent implements OnInit {


  constructor(private resultados: ResultadosService) { }

  ngOnInit(): void {
  }
  
  posiciones = new Array(9);
  resultado:string = '';

  ponerX(posicion:number){
    if(!this.posiciones[posicion]){
      this.posiciones[posicion]='x';
      let item= document.querySelector('#c'+(posicion+1));
      item.append("x");

      if(!this.verificarGanador('x')){
        if(!this.empate()){
        this.ponerO();
          if(this.verificarGanador('o')){
            this.resultado="perdiste";
            this.resultados.guardarResultado('ta-te-ti','perdiste');
          }else{
            if(this.empate()){
              this.resultado="empate";
              this.resultados.guardarResultado('ta-te-ti','empate');
            }
          }
        }else{
          this.resultado="empate";
          this.resultados.guardarResultado('ta-te-ti','empate');
        }
      }else{
        this.resultado="ganaste";
        this.resultados.guardarResultado('ta-te-ti','ganaste');
      }
      
      
    }    
  }
  
  ponerO(){

    let aux:boolean=false;

    do{
      let random = Math.floor(Math.random() * (9 - 0) + 0);
      if(!this.posiciones[random]){
        this.posiciones[random]='o';
        let item= document.querySelector('#c'+(random+1));
        item.append("o");
        aux=true;
      }
      
    }while(!aux);
  }

  empate(){
    let retorno = true;
    for (const posicion of this.posiciones) {
      if(!posicion){
        retorno = false;
        break;
      }
    }

    return retorno;
  }

  verificarGanador(jugador:string){
    let retorno = false;
    if(this.posiciones[0] == jugador && this.posiciones[1] == jugador && this.posiciones[2] == jugador){
      retorno = true;
    }

    if(this.posiciones[0] == jugador && this.posiciones[4] == jugador && this.posiciones[8] == jugador){
      retorno = true;
    }

    if(this.posiciones[0] == jugador && this.posiciones[3] == jugador && this.posiciones[6] == jugador){
      retorno = true;
    }

    if(this.posiciones[1] == jugador && this.posiciones[4] == jugador && this.posiciones[7] == jugador){
      retorno = true;
    }

    if(this.posiciones[2] == jugador && this.posiciones[4] == jugador && this.posiciones[6] == jugador){
      retorno = true;
    }

    if(this.posiciones[2] == jugador && this.posiciones[5] == jugador && this.posiciones[8] == jugador){
      retorno = true;
    }

    if(this.posiciones[3] == jugador && this.posiciones[4] == jugador && this.posiciones[5] == jugador){
      retorno = true;
    }

    if(this.posiciones[6] == jugador && this.posiciones[7] == jugador && this.posiciones[8] == jugador){
      retorno = true;
    }
    
    return retorno;
  }

  reset(){
    this.posiciones = new Array(9);
    for (let index = 0; index < this.posiciones.length; index++) {
      let item= document.querySelector('#c'+(index+1));
      item.innerHTML='';
      }
      this.resultado='';
  }

}
