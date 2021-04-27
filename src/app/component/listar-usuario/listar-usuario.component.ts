import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from '../../service/usuario.service'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[] | undefined;
  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios = data;
    })
  }
  Editar(usuario:Usuario):void{
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["editarUsuario"]);
  }
}