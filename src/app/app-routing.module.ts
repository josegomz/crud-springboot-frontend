import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarUsuarioComponent } from './component/listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './component/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './component/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './component/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {path: 'listarUsuarios', component: ListarUsuarioComponent},
  {path: 'agregarUsuario', component: AgregarUsuarioComponent},
  {path: 'editarUsuario', component: EditarUsuarioComponent},
  {path: 'eliminarUsuario', component: EliminarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
