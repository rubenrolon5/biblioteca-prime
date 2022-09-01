import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuItem} from 'primeng/api';          
import {MenubarModule} from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
