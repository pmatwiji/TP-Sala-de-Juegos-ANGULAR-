import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.scss']
})
export class TaTeTiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posiciones = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']

  ponerX(id:string){
    let item= document.querySelector('#'+id);
    
    if(item.hasAttribute){
      item.append("x");
      item.removeAttribute("id");
    }

    this.ponerO();
    


    
  }

  ponerO(){
    let random = Math.floor(Math.random() * (9 - 0) + 0);
    let itemIA = document.querySelector('#' + this.posiciones[random]);

    if (itemIA.hasAttribute) {
      itemIA.append("o");
      itemIA.removeAttribute("id");
    }
  }

}
