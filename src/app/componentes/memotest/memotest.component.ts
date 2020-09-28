import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  fichas = [{index: 0,valor:0},
            {index: 1,valor:0},
            {index: 2,valor:1},
            {index: 3,valor:1},
            {index: 4,valor:2},
            {index: 5,valor:2},
            {index: 6,valor:3},
            {index: 7,valor:3},
            {index: 8,valor:4},
            {index: 9,valor:4}];

  cuadrados = ["0","0","1","1","2","2","3","3","4","4"];          

  mostrar:boolean[] = new Array(12);
  primeraCarta:any = null;
  segundaCarta:any = null;
  primerIndex:number;
  segundoIndex:number;

  intentos:number = 0;
  juegoNuevo:boolean = false;
  deshabilitar:boolean = false;
  parejas:number = 0;
  



  constructor() { }

  ngOnInit(): void {
 
  }

  comenzar(){
    this.juegoNuevo = true;
    this.mostrarFicha();
    this.cuadrados.sort(function () {
      return Math.random() - 0.5;     
    });
    setTimeout(() => {
      this.ocultarFicha();
    }, 2000);
  }

  mostrarFicha() {
    for(let i = 0; i < this.fichas.length; i++) {
      this.mostrar[i] = true;
    }
  }

  ocultarFicha() {
    for(let i = 0; i < this.fichas.length; i++) {
      this.mostrar[i] = false;
    }
  }

  seleccionar(casillero:number){
    if(!this.mostrar[casillero]) {
      this.mostrar[casillero] = true;
      if(this.primeraCarta == null) {
        this.primeraCarta = this.cuadrados[casillero];
        this.primerIndex = casillero;
      } else {
        this.deshabilitar=true;
        this.segundaCarta = this.cuadrados[casillero];
        this.segundoIndex = casillero;
          if(this.primeraCarta == this.segundaCarta) {
            this.parejas++
            this.intentos++;
            if(this.parejas == 5){
              alert("gano");
              this.victoria();
            }
          } else {
            setTimeout(() => {
              this.intentos++;
              this.mostrar[this.primerIndex]= false;
              this.mostrar[this.segundoIndex]=false;
            }, 500);
            
          }
          this.deshabilitar=false;
          this.primeraCarta = null;
          this.segundaCarta = null;
      }
    }
  }



  victoria() {
    setTimeout(() => {
      this.reiniciar();
    }, 2000);
  }

  reiniciar() {
    this.juegoNuevo = false;
    this.intentos=0;
    this.parejas=0;
  }


  

  


}
