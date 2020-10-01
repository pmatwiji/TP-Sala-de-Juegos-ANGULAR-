import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  nombreReg:string[];

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
        this.nombreReg = this.correo.split('@');
        this.authService.register(this.correo, this.password).then(response => {

            this.authService.getCurrentUser().then((response: any) => {
            this.db.list('usuarios').set('UID: '+response.uid, { correo:response.email, id: response.uid });
            this.authService.logOutCurrentUser();
            this.router.navigate(['/Principal']);
          });

        }).catch(error => this.mensaje = error);
        
        
      } else {
        this.mensaje = "Las contraseñas no son iguales";
      }
    }
  }

}
