import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleIndicadorComponent } from './indicadores/pages/detalle-indicador/detalle-indicador.component';
import { GraficoIndicadorComponent } from './indicadores/pages/grafico-indicador/grafico-indicador.component';
import { HomeComponent } from './indicadores/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalle-indicador/:nombre',
    component: DetalleIndicadorComponent
  },
  {
    path: 'grafico-indicador/:nombre/:unidad',
    component: GraficoIndicadorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
