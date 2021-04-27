import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './component/agregar-usuario/agregar-usuario.component';
import { ListarUsuarioComponent } from './component/listar-usuario/listar-usuario.component';
import { HttpClientModule} from '@angular/common/http';
import {UsuarioService} from './service/usuario.service'
import {FormsModule} from '@angular/forms';
import { EditarUsuarioComponent } from './component/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './component/eliminar-usuario/eliminar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
