import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  fichas = ['fondo-uno', 'fondo-uno', 'fondo-dos', 'fondo-dos', 'fondo-tres', 'fondo-tres', 'fondo-cuatro', 'fondo-cuatro', 'fondo-cinco', 'fondo-cinco'];
  index: number = 1;
  intentos:number = 0;
  frente :boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.fichas.sort(function () {
      return Math.random() - 0.5;
      
    })
    //alert(this.fichas);

    for (const clase of this.fichas) {
      document.querySelector('#cuadro' + this.index).classList.add(clase);
      (<HTMLElement>document.querySelector('#cuadro' + this.index)).style.backgroundImage = "none";
      this.index++;
    }

    this.index= 1;

    setTimeout(() => {
      for (const clase of this.fichas) {
        (<HTMLElement>document.querySelector('#cuadro' + this.index)).style.backgroundImage = "url(../../../assets/imagenes/quiensoy3.jpg)";
        this.index++;
      }
    }, 1500);

  }

  


}
