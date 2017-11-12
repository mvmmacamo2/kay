import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {PostsComponent} from "./posts/posts.component";


const paginainicialRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'posts', component: PostsComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(paginainicialRoutes)
    ],
    exports:[RouterModule]
})

export class PaginaInicialRoutingModule {
}