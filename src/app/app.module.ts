import { TokenInterceptor } from './token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { EquipoComponent } from './privado/equipo/equipo.component';
import { JugadorAdministrarComponent } from './privado/jugador/jugador-administrar/jugador-administrar.component';
import { JugadorListarComponent } from './privado/jugador/jugador-listar/jugador-listar.component';
import { JugadorCrearComponent } from './privado/jugador/jugador-crear/jugador-crear.component';
import { JugadorEditarComponent } from './privado/jugador/jugador-editar/jugador-editar.component';
import { JugadorPrincipalComponent } from './privado/jugador/jugador-principal/jugador-principal.component';


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
    EquipoComponent,
    JugadorAdministrarComponent,
    JugadorListarComponent,
    JugadorCrearComponent,
    JugadorEditarComponent,
    JugadorPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  // Incluir el interceptor
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
