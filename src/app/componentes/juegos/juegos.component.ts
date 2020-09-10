import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Juegos");
  }

}
