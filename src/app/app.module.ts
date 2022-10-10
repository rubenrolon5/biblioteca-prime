import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuItem} from 'primeng/api';          
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {DialogModule} from'primeng/dialog';
import { FormularioLibroComponent } from './libro/formulario-libro/formulario-libro.component';
import { InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { MessagesModule} from 'primeng/messages';
import {FormsModule} from '@angular/forms';
  @NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    LibrosComponent,
    FormularioLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
  InputTextModule,
  InputNumberModule,
  FormsModule,
  MessageModule,
  MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
