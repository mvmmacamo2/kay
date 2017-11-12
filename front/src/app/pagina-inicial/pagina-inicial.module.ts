import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {FooterComponent} from "./footer/footer.component";
import {MenuComponent} from "./menu/menu.component";
import {PostsComponent} from "./posts/posts.component";
import {PaginaInicialComponent} from "./pagina-inicial.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
// import {RouterModule} from "@angular/router";
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PaginaInicialRoutingModule} from "./pagina-inicial.routing.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        PaginaInicialRoutingModule,

        // RouterModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [

    ],
    declarations: [
        LoginComponent,
        FooterComponent,
        MenuComponent,
        PostsComponent,
        PaginaInicialComponent,



    ],
    providers: []

})

export class PaginaInicialModule {
}