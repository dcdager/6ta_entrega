import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewusrComponent } from './components/newusr/newusr.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { C404Component } from './components/c404/c404.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VistaUserComponent } from './components/vista-user/vista-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewusrComponent,
    UsuarioComponent,
    C404Component,
    VistaUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
