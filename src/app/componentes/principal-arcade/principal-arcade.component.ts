import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NombreJuegoService } from '../../servicios/nombre-juego.service';
import { AuthService } from "../../servicios/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-arcade',
  templateUrl: './principal-arcade.component.html',
  styleUrls: ['./principal-arcade.component.scss']
})
export class PrincipalArcadeComponent implements OnInit {

  @Input() opcionSeleccionada: string;
  //@Output() juegoSeleccionadoEvento = new EventEmitter<string>();
  mailUser:any;

  constructor(private nombreJuego: NombreJuegoService,private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().then((response:any) => {
      this.mailUser= response.email;
    });
  }

  // verOpcion(opcion: string){
  //   this.opcionSeleccionada=opcion;
  //   console.log("tres: " + opcion);
  // }

  // seleccionarJuego(juego: string)
  // {
  //   this.juegoSeleccionadoEvento.emit(juego);
  //   console.log(juego);
  // }

  setearJuego(juego: string) {
    if(this.mailUser==null){
      this.router.navigate(['/Login']);
    }else{
      this.nombreJuego.seleccionarJuego(juego);
      this.router.navigate(['/juegos']);
    }
    
  }

}
