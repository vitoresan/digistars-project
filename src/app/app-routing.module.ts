import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { OperacoesBinariasComponent } from './components/operacoes-binarias/operacoes-binarias.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'conjuntos',
  component: ConjuntosComponent
}, {
  path: 'operacoes-binarias',
  component: OperacoesBinariasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
