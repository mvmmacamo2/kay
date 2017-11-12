import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsuariosComponent} from "./usuarios.component";
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';


@NgModule({
    imports: [
        CommonModule,

    ],
    exports: [],
    declarations: [
        UsuariosComponent,
        NovoUsuarioComponent,
        DetalheUsuarioComponent],
    providers:[]


})

export  class UsuariosModule{}