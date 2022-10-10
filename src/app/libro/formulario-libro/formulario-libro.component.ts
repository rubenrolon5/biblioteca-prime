import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro.interface';
import { LibrosService } from 'src/app/servicios/libros.service';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {
  codigo: number | null = null;
  titulo: string | null = null;
  autor: string | null = null;
  paginas: number | null = null;

  codigoValido: boolean = true;
  tituloValido: boolean = true;
  autorValido: boolean = true;
  paginasValido: boolean = true;

  guardando: boolean = false;
  mensajes: Message[] = [{ severity: 'info', summary: 'Titulo', detail: 'detalle prueba' }];

  constructor(

    private servicioLibros: LibrosService
  ) { }

  ngOnInit(): void {
  }
  guardar() {
    if (this.validar()) {
      const libro: Libro = {
        idlibro: this.codigo,
        titulo: this.titulo,
        autor: this.autor,
        paginas: this.paginas
      }
      this.guardando = false;
      this.servicioLibros.post(libro).subscribe({
        next: () => {
          this.guardando = true;
          this.mensajes = [{ severity: 'success', summary: 'Exito', detail: 'Se registro el libro' }];
        },
        error: (e) => {
          this.guardando = false;
          console.log(e);
          this.mensajes = [{ severity: 'error', summary: 'error al registrar', detail: 'e.error' }];
        }
      });
    }
  }

  validar(): boolean {
    this.codigoValido = this.codigo !== null//estamos llamando a que ejecute estas funciones
    this.tituloValido = this.titulo !== null && this.titulo?.length > 0;
    this.autorValido = this.autor !== null && this.autor?.length > 0;
    this.paginasValido = this.paginas !== null;
    return this.codigoValido && this.tituloValido && this.autorValido && this.paginasValido;
  }
}

