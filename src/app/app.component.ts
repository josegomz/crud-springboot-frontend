import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD USUARIO (SPRING BOOT + ANGULAR)';

  constructor(private router: Router){}

  listarUsuarios(){
    this.router.navigate(["listarUsuarios"]);
  }

  agregarUsuario(){
    this.router.navigate(["agregarUsuario"]);
  }
  editarUsuario(){
    this.router.navigate(["editarUsuario"]);
  }
  eliminarUsuario(){
    this.router.navigate(["eliminarUsuario"]);
  }

}
