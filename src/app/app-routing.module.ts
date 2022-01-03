import { ErrorNoEncontradoComponent } from './publico/error-no-encontrado/error-no-encontrado.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: InicioComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: ErrorNoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
