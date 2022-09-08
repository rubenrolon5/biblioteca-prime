import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: 'autores', component: AutoresComponent },
  { path: 'libros', component: LibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
