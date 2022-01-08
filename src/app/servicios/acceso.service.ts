import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Imagen } from '../modelos/imagen.model';
import { Usuario } from '../modelos/usuario.model';
import * as lasRutas from './../utilidades/dominios/uris';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  public objUsuario: Usuario;
  public rutaBackendInicio: string = lasRutas.API_ACCESO;

  constructor(private http: HttpClient, private router: Router) {
    this.objUsuario = this.inicializarUsuario();
  }

  // Metodos Obligatorios

  public inicializarUsuario(): Usuario {
    return new Usuario(0, this.inicializarImagen(), '', '', '', '', '', '');
  }

  public inicializarImagen(): Imagen {
    return new Imagen(0, '', '', '', '', '', '');
  }

  // Metodos de logica del negocio

  public obtenerUsuario(): Usuario {
    return this.objUsuario;
  }

  public cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('foto');
    this.router.navigate(['/public/login']);
  }

  public obtenerToken(): any{
    return localStorage.getItem('token');
  }

  // Favor no trabajar con any
  public iniciarSesion(miUsuario: Usuario): Observable<any>{
    return this.http.post<any>(this.rutaBackendInicio, miUsuario);
  }

  // Falta un metodo para verificar si el usuario es valido

}
