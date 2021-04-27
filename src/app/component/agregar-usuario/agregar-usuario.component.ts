import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario: Usuario= new Usuario();
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
  }

  Guardar(usuario: Usuario){
    this.service.createUsuario(usuario).subscribe(data=>{
      alert("Se agregó con exito");
      this.router.navigate(["listarUsuarios"]);
    });
  }
}
