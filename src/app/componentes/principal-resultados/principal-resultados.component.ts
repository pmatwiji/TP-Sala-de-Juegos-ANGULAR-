import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-resultados',
  templateUrl: './principal-resultados.component.html',
  styleUrls: ['./principal-resultados.component.scss']
})
export class PrincipalResultadosComponent implements OnInit {

  listJugadores =[{nombre: 'Pepe',juego: 'Adivina el numero',puntaje: '3 intentos'},
                  {nombre: 'Maria',juego: 'Ta te ti',puntaje: 'Gano'},
                  {nombre: 'Luis',juego: 'Adivina el numero',puntaje: '9 intentos'}
                ];
              
  colores = ['orange','yellow','green','lightblue','pink','blue'];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  getRandomColor2() {
    return this.colores[Math.floor(Math.random() * this.colores.length)];
  }

}
