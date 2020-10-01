import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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

  usuarios: Observable<any[]>;
  listaUsuarios: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.usuarios = this.db.list('usuarios').valueChanges();
    this.usuarios.subscribe(usuarios => this.listaUsuarios = usuarios, error => console.log(error));
  }

  getRandomColor() {
    return this.colores[Math.floor(Math.random() * this.colores.length)];
  }

}
