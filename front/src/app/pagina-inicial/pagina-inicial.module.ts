import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {FooterComponent} from "./footer/footer.component";
import {MenuComponent} from "./menu/menu.component";
import {PostsComponent} from "./posts/posts.component";
import {PaginaInicialComponent} from "./pagina-inicial.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        LoginComponent,
        FooterComponent,
        MenuComponent,
        PostsComponent,
        PaginaInicialComponent


    ],
    providers: []

})

export class PaginaInicialModule {
}