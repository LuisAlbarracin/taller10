import { RespuestaLogin } from './../../modelos/respuesta-login.model';
import { AccesoService } from './../../servicios/acceso.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario.model';
import { Imagen } from '../../modelos/imagen.model';
import { mostrarMensaje } from '../../utilidades/mensajes/mensajes-toast.func';
import { NgForm } from '@angular/forms';

import * as cifrado from 'js-sha512';
import { miObservadorAny } from '../../utilidades/observadores/observador-any';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  public usuarioSeleccionado: Usuario;
  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(public router: Router, public miMensaje: ToastrService, public accesoService: AccesoService) {
    this.usuarioSeleccionado = this.inicializarUsuario();
  }

  ngOnInit(): void {
  }

  // Metodos Obligatorios
  public inicializarUsuario(): Usuario {
    return new Usuario(0, new Imagen(0, '', '', '', '', '', ''), '', '', '', '', '', '');
  }

  // Logica del negocio
  public validarDatos(formulario: NgForm): void {
    const miHash = cifrado.sha512(this.usuarioSeleccionado.claveusuario);
    const miCorreo = this.usuarioSeleccionado.correousuario;
    const miUsuario = new Usuario(0, new Imagen(0, '', '', '', '', '', ''), '', '', '', '', miCorreo, miHash);

    this.accesoService.iniciarSesion(miUsuario).pipe(
      map((miRespuesta: RespuestaLogin) => {
        mostrarMensaje('success', 'Bienvenido al Sistema', 'Inicio Sesión', this.miMensaje)
        localStorage.setItem('token', miRespuesta.tokenLogin);
        localStorage.setItem('foto', miRespuesta.base64Login);
        this.router.navigate(['/private/root']);
      }),
      catchError((miError) => {
        mostrarMensaje('error', 'Usuario o Contraseña Invalido', 'Fallo Sesión', this.miMensaje);
        throw miError;
      })
    ).subscribe(miObservadorAny);

    formulario.resetForm();
  }


}
