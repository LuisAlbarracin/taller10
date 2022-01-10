import { Jugador } from './../modelos/jugador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as lasRutas from './../utilidades/dominios/uris';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  public rutaJugador: string = lasRutas.API_JUGADOR;

  constructor(private http: HttpClient) {

  }

  public obtenerTodosJugadores():Observable<Jugador[]>{
    return this.http.get<Jugador[]>(this.rutaJugador+'/');
  }
}
