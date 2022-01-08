import { JugadorEditarComponent } from './privado/jugador/jugador-editar/jugador-editar.component';
import { JugadorListarComponent } from './privado/jugador/jugador-listar/jugador-listar.component';
import { JugadorCrearComponent } from './privado/jugador/jugador-crear/jugador-crear.component';
import { JugadorAdministrarComponent } from './privado/jugador/jugador-administrar/jugador-administrar.component';
import { JugadorPrincipalComponent } from './privado/jugador/jugador-principal/jugador-principal.component';
import { EquipoComponent } from './privado/equipo/equipo.component';
import { InicioDashComponent } from './contenedores/dashboard/inicio-dash/inicio-dash.component';
import { ContenedorDashComponent } from './contenedores/dashboard/contenedor-dash/contenedor-dash.component';
import { DesarrolladorComponent } from './publico/desarrollador/desarrollador.component';
import { InicioLandComponent } from './contenedores/landscape/inicio-land/inicio-land.component';
import { ContenedorLandComponent } from './contenedores/landscape/contenedor-land/contenedor-land.component';
import { ErrorNoEncontradoComponent } from './publico/error-no-encontrado/error-no-encontrado.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './publico/acceso/acceso.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  {
    path: 'public', component: ContenedorLandComponent,
    children: [
      { path: 'root', component: InicioLandComponent },
      { path: 'dev', component: DesarrolladorComponent },
      { path: 'login', component: AccesoComponent },

      { path: '', redirectTo: 'root', pathMatch: 'full' },
      { path: '**', component: ErrorNoEncontradoComponent }
    ]
  },
  {
    path: 'private', component: ContenedorDashComponent,
    children: [
      { path: 'root', component: InicioDashComponent },
      { path: 'team', component: EquipoComponent },
      {
        path: 'player', component: JugadorPrincipalComponent,
        children: [
          { path: 'manage', component: JugadorAdministrarComponent },
          { path: 'create', component: JugadorCrearComponent },
          { path: 'list', component: JugadorListarComponent },
          { path: 'update', component: JugadorEditarComponent },

          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: '**', component: ErrorNoEncontradoComponent }
        ]
      },

      { path: '', redirectTo: 'root', pathMatch: 'full' },
      { path: '**', component: ErrorNoEncontradoComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
