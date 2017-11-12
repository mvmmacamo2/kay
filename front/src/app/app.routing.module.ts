import {RouterModule, Routes} from "@angular/router";
import {UsuariosComponent} from "./admin/usuarios/usuarios.component";
import {AdminComponent} from "./admin/admin.component";
import {ModuleWithProviders} from "@angular/core";
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";
import {LoginComponent} from "./pagina-inicial/login/login.component";
import {PostsComponent} from "./pagina-inicial/posts/posts.component";

import {NgModule} from "@angular/core";


const appRoutes: Routes = [
    {path: 'admin/usuarios', component: UsuariosComponent},
    {path: 'admin', component: AdminComponent},
    {path: '', component: PaginaInicialComponent},
    {path: 'login', component: LoginComponent},
    {path: 'posts', component: PostsComponent}

];



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {
}