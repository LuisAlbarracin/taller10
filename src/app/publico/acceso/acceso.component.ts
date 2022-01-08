import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { Imagen } from 'src/app/modelos/imagen.model';
import { ARREGLO_USUARIO } from 'src/app/mocks/usuario.mock';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/mensajes-toast.func';
import { NgForm } from '@angular/forms';

import * as cifrado from 'js-sha512';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  public arregloUsuarios: Usuario[];
  public usuarioSeleccionado: Usuario;
  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(public router: Router, public miMensaje: ToastrService) {
    this.arregloUsuarios = ARREGLO_USUARIO;
    this.usuarioSeleccionado = this.inicializarUsuario();
  }

  ngOnInit(): void {
  }

  // Metodos Obligatorios
  public inicializarUsuario(): Usuario {
    return new Usuario(0, new Imagen(0, '', '', '', '', '', ''), '', '', '', '', '', '');
  }

  // Logica del negocio
  public iniciarSesion(): void {
    localStorage.setItem('codUsuario', this.usuarioSeleccionado.codigousuario.toString());
    localStorage.setItem('token', 'Este es el token ultra secreto');

    this.router.navigate(['/private/root']);
    mostrarMensaje('success', 'Bienvenido al Sistema', 'Inicio Sesión', this.miMensaje);
  }

  public errorSession(formulario: NgForm): void{
    formulario.resetForm();
    this.usuarioSeleccionado = this.inicializarUsuario();
    mostrarMensaje('error', 'Contraseña Incorrecta', 'Error de Sesión', this.miMensaje);
  }

  public validarDatos(formulario: NgForm): void{
    // Esto es lo que vamos a cambiar por el backend

    let encontrado = false;
    const miHash = cifrado.sha512(this.usuarioSeleccionado.claveusuario);

    //console.log('---> Clave digitada por consola: ', miHash);

    this.arregloUsuarios.forEach((miUsuario) => {
      //console.log('---> Clave base de datos: ', miUsuario.claveusuario)
      if(miUsuario.correousuario == this.usuarioSeleccionado.correousuario && miUsuario.claveusuario == miHash){
        this.usuarioSeleccionado = miUsuario;
        encontrado = true;
      }
    });

    if(encontrado){
      this.iniciarSesion();
    }else{
      this.errorSession(formulario);
    }

  }


}
