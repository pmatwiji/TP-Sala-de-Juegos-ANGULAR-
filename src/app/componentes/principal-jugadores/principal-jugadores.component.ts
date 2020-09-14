import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-jugadores',
  templateUrl: './principal-jugadores.component.html',
  styleUrls: ['./principal-jugadores.component.scss']
})
export class PrincipalJugadoresComponent implements OnInit {

  listJugadores =[{nombre: 'Pepe',juego: 'Adivina el numero',puntaje: '3 intentos'},
                  {nombre: 'Maria',juego: 'Ta te ti',puntaje: 'Gano'},
                  {nombre: 'Luis',juego: 'Adivina el numero',puntaje: '9 intentos'}
                ];

  colores = ['orange','yellow','green','lightblue','pink','blue'];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    return this.colores[Math.floor(Math.random() * this.colores.length)];
  }

}
