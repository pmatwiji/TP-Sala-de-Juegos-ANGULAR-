import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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

  resultados: Observable<any[]>;
  listaResultados: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.resultados = this.db.list('resultados').valueChanges();
    this.resultados.subscribe(resultados => this.listaResultados = resultados, error => console.log(error));
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  getRandomColor2() {
    return this.colores[Math.floor(Math.random() * this.colores.length)];
  }

}
