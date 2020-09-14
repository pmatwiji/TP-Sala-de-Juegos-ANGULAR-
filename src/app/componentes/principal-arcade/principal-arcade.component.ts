import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal-arcade',
  templateUrl: './principal-arcade.component.html',
  styleUrls: ['./principal-arcade.component.scss']
})
export class PrincipalArcadeComponent implements OnInit {

  @Input() opcionSeleccionada: string;
  constructor() { }

  ngOnInit(): void {
  }

  // verOpcion(opcion: string){
  //   this.opcionSeleccionada=opcion;
  //   console.log("tres: " + opcion);
  // }

}
