import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario= new Usuario();
  id:string="";
  constructor(private router: Router , private service:UsuarioService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    this.id = localStorage.getItem("id")!;
    this.service.getUsuarioId(+this.id).subscribe(data=>{
      this.usuario=data;
    })
  }

  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario).subscribe(
      data=>{
        this.usuario=data;
        alert("Se actualizó con éxito");
        this.router.navigate(["listarUsuarios"]);
      }
    )
  }
}
