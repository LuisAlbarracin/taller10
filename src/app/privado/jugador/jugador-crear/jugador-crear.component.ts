import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ARREGLO_TIPO_DOCUMENTO } from './../../../utilidades/dominios/tipo-documento';
import { ARREGLO_POSICION } from './../../../utilidades/dominios/posicion-jugador';
import { Jugador } from './../../../modelos/jugador.model';
import { Imagen } from './../../../modelos/imagen.model';
import { ImagenService } from './../../../servicios/imagen.service';
import { JugadorService } from './../../../servicios/jugador.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as cifrado from 'js-sha512';

@Component({
  selector: 'app-jugador-crear',
  templateUrl: './jugador-crear.component.html',
  styleUrls: ['./jugador-crear.component.css']
})
export class JugadorCrearComponent implements OnInit, OnDestroy {

  public patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  public jugadorSeleccionado: Jugador;
  public arregloPosicion: any[];
  public arregloTipos: any[];
  public miSuscripcion: Subscription;
  public temporal: any;

  constructor(public miMensaje: ToastrService, public router: Router, public jugadorService: JugadorService, public imagenService: ImagenService) {
    this.jugadorSeleccionado = this.inicializarJugador();
    this.jugadorSeleccionado = this.inicializarJugador();
    this.arregloTipos = ARREGLO_TIPO_DOCUMENTO;
    this.arregloPosicion = ARREGLO_POSICION;
    this.miSuscripcion = this.temporal;

  }

  ngOnInit(): void {
    this.cargarCombos();
  }

  ngOnDestroy(): void {
    if(this.miSuscripcion){
      this.miSuscripcion.unsubscribe;
    }
  }

  // Metodos Obligatorios
  public inicializarJugador(): Jugador {
    return new Jugador(0, this.inicializarImagen(), '', '', '', '', '', '',0, 0, '', []);
  }

  public inicializarImagen(): Imagen{
    return  new Imagen(0, '', '', '', '', '', '');
  }

  // Logica del negocio

  public cargarCombos():void{
    this.jugadorSeleccionado.tipodocumentousuario = this.arregloTipos[0].acronimo;
    this.jugadorSeleccionado.posicionjugador = this.arregloPosicion[0].acronimo;
  }


  public seleccionarFoto(objeto: any): any {
    let caja = objeto.target.files[0];
    if (!caja || caja.length == 0) {
      return;
    }

    if (caja.type.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(caja);
    reader.onload = () => {
      this.jugadorSeleccionado.fotousuario.base64imagen = this.temporal;
      this.jugadorSeleccionado.fotousuario.nombrepublicoimagen = caja.name;
      this.jugadorSeleccionado.fotousuario.tamanoimagen = caja.size;
      this.jugadorSeleccionado.fotousuario.tipoimagen = caja.type;
    };
  }

  public agregarJugador(formulario: NgForm): void{

  }

}
