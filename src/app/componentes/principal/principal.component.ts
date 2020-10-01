import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from "../../servicios/auth.service";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  opcionSeleccionada: string;

  constructor(private title:Title,private authService: AuthService) {  }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Menu Principal");
  }


  verOpcion(opcion: string){
    this.opcionSeleccionada=opcion;
    console.log("dos: " + opcion);
  }

 

}
