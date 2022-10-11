import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Messages } from 'primeng/messages';
import { Libro } from '../interfaces/libro.interface';
import { LibrosService } from '../servicios/libros.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  listaLibros: Libro[] = [];//aqui se guarda la lista de libros
cargando: boolean=  false;// Esta variable mustra la animacion de carga
dialogoVisible:boolean= false;// indica que el dialogo este visible
mensajes: Message[]=[];
  constructor(private servicioLibros: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.servicioLibros.get().subscribe({
      next: (datos) => {
        
        this.listaLibros = datos;
        this.cargando= false;
      },
      error: (e) => {
        console.log(e);
        this.cargando= false;
        this.mensajes =[{severity:'error', summary:'Error al cargar libros',detail:e.message}]
      }
    });
  }
  mostrardialogo(){
    this.dialogoVisible= true;
  }
}
