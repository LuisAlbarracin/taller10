import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  FormsModule } from '@angular/forms';
import {  ToastrModule  } from 'ngx-toastr';
import {  ModalModule } from 'ngx-bootstrap/modal';
import {  BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { CabeceraDashComponent } from './contenedores/dashboard/cabecera-dash/cabecera-dash.component';
import { ContenedorDashComponent } from './contenedores/dashboard/contenedor-dash/contenedor-dash.component';
import { InicioDashComponent } from './contenedores/dashboard/inicio-dash/inicio-dash.component';
import { CabeceraLandComponent } from './contenedores/landscape/cabecera-land/cabecera-land.component';
import { ContenedorLandComponent } from './contenedores/landscape/contenedor-land/contenedor-land.component';
import { InicioLandComponent } from './contenedores/landscape/inicio-land/inicio-land.component';
import { AccesoComponent } from './publico/acceso/acceso.component';
import { ErrorNoEncontradoComponent } from './publico/error-no-encontrado/error-no-encontrado.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { DesarrolladorComponent } from './publico/desarrollador/desarrollador.component';
import { JugadorComponent } from './private/jugador/jugador.component';
import { EquipoComponent } from './private/equipo/equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraDashComponent,
    ContenedorDashComponent,
    InicioDashComponent,
    CabeceraLandComponent,
    ContenedorLandComponent,
    InicioLandComponent,
    AccesoComponent,
    ErrorNoEncontradoComponent,
    InicioComponent,
    DesarrolladorComponent,
    JugadorComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
