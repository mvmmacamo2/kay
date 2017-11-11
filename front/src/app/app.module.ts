import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { MenuComponent } from './pagina-inicial/menu/menu.component';

@NgModule({
declarations: [
AppComponent,
AdminComponent,
MenuAdminComponent,
PaginaInicialComponent,
UsuariosComponent,
MenuComponent
],
imports: [
BrowserModule

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
