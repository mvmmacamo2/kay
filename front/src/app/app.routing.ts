
import {RouterModule, Routes} from "@angular/router";
import {UsuariosComponent} from "./admin/usuarios/usuarios.component";
import {AdminComponent} from "./admin/admin.component";
import {ModuleWithProviders} from "@angular/core";
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";

const APP_ROUTES: Routes =[
{path: 'admin/usuarios', component: UsuariosComponent},
{path:'admin', component:AdminComponent},
{path:'', component:PaginaInicialComponent }

];

export const routing: ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);