import { JugadorService } from './../../../servicios/jugador.service';
import { Jugador } from './../../../modelos/jugador.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, map, Subscription } from 'rxjs';
import { miObservadorAny } from 'src/app/utilidades/observadores/observador-any';

@Component({
  selector: 'app-jugador-listar',
  templateUrl: './jugador-listar.component.html',
  styleUrls: ['./jugador-listar.component.css']
})
export class JugadorListarComponent implements OnInit, OnDestroy {

  public arregloJugadores: Jugador[];
  public miSuscripcion: Subscription;
  public temporal: any;

  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadTotal: number;
  public cantidadPaginas: number;

  public cargaFinalizada: boolean;

  constructor(public jugadorService: JugadorService) {
    this.arregloJugadores = [];
    this.miSuscripcion = this.temporal;
    this.paginaActual = 0;
    this.cantidadMostrar = 0;
    this.cantidadTotal = 0;
    this.cantidadPaginas = 0;
    this.cargaFinalizada = false;
  }

  ngOnInit(): void {
    this.obtenerJugadores();
  }

  ngOnDestroy(): void {
    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe();
    }
  }

  // Logica del Negocio -----

  public actualizarPaginador(): void {
    this.paginaActual = 1;
    this.cantidadMostrar = 1;
    this.cantidadTotal = this.arregloJugadores.length;
    this.cantidadPaginas = Math.ceil(this.cantidadTotal / this.cantidadMostrar);
  }

  public obtenerJugadores(): void {
    this.miSuscripcion = this.jugadorService.obtenerTodosJugadores()
      .pipe(map((jsonJugadores) => {
        this.arregloJugadores = jsonJugadores;
        this.actualizarPaginador();
        return jsonJugadores;
      }),
        finalize(() => {
          this.cargaFinalizada = true;
        }))
      .subscribe(miObservadorAny);
  }

}
