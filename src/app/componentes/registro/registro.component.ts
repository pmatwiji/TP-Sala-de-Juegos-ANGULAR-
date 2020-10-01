import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  correo:string;
  password:string;
  repetirPassword:string;
  mensaje:string;

  constructor(private authService: AuthService, private router: Router, private db: AngularFireDatabase, private title:Title ) { }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Registro");
  }

  Register() {

    if ((this.password == null || this.password == "") || (this.repetirPassword == null || this.repetirPassword == "") || (this.correo == null || this.correo == "")) {
      this.mensaje = "Faltan datos, por favor, complete todos los campos";
    }
    else {

      if (this.password == this.repetirPassword) {
        this.authService.register(this.correo, this.password).then(response => {

            //this.authService.getCurrentUser().then((response: any) => {
            //this.context.list('usuarios').set(response.uid, { correo:this.correo, gano: 0, perdio: 0, id: response.uid });
            this.router.navigate(['/Principal']);
          //});

        }).catch(error => this.mensaje = error);
        
        
      } else {
        this.mensaje = "Las contraseñas no son iguales";
      }
    }
  }

}
