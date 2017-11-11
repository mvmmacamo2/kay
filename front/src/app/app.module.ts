import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';

@NgModule({
declarations: [
AppComponent,
AdminComponent,
MenuAdminComponent
],
imports: [
BrowserModule,
MDBBootstrapModule.forRoot()
],
schemas: [ NO_ERRORS_SCHEMA ],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
