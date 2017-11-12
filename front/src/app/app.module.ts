import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {MenuAdminComponent} from './admin/menu-admin/menu-admin.component';
// import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import {UsuariosComponent} from './admin/usuarios/usuarios.component';
// import {MenuComponent} from './pagina-inicial/menu/menu.component';
import {FormsModule} from "@angular/forms";


import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
// import {FooterComponent} from './pagina-inicial/footer/footer.component';
import {FootergeralComponent} from './footergeral/footergeral.component';
// import {routing} from "./app.routing";
// import {LoginComponent} from './pagina-inicial/login/login.component';
// import {PostsComponent} from "./pagina-inicial/posts/posts.component";
import {AppRoutingModule} from "./app.routing.module";
import {PaginaInicialModule} from "./pagina-inicial/pagina-inicial.module";
import {UsuariosModule} from "./admin/usuarios/usuarios.module";


@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        MenuAdminComponent,
        // PaginaInicialComponent,
//        // MenuComponent,
        // FooterComponent,
        FootergeralComponent,
        // LoginComponent,
        // PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        PaginaInicialModule,
        UsuariosModule

    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
