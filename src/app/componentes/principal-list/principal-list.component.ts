import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrls: ['./principal-list.component.scss']
})
export class PrincipalListComponent implements OnInit {

  @Output() opcionArcadeEvento = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setearOpcion(opcion: string)
  {
    this.opcionArcadeEvento.emit(opcion);
    console.log(opcion);
  }

}
