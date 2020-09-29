import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent implements OnInit {

  faCode = faCode;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
