import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient){}
  private url = "http://localhost:9090/proyecto-crud/usuario/";

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url+"listarUsuarios");
  }
  createUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.url+"agregarUsuario",usuario);
  }
  getUsuarioId(id:number){
      return this.http.get<Usuario>(this.url+"/"+id);
  }
  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.url+"/"+usuario.id,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.url+"/"+usuario.id);
  }

}
