import { AccesoService } from './../../../servicios/acceso.service';
import { Usuario } from './../../../modelos/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-dash',
  templateUrl: './cabecera-dash.component.html',
  styleUrls: ['./cabecera-dash.component.css']
})
export class CabeceraDashComponent implements OnInit {

  public usuarioSeleccionado: Usuario;
  public base64FotoPerfil: string;

  constructor(public accesoService: AccesoService) {
    this.usuarioSeleccionado = accesoService.obtenerUsuario();
    this.base64FotoPerfil = localStorage.getItem('foto') as string;
  }

  ngOnInit(): void {
  }

}
