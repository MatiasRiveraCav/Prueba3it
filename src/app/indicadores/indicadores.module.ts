import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DetalleIndicadorComponent } from './pages/detalle-indicador/detalle-indicador.component';
import { GraficoIndicadorComponent } from './pages/grafico-indicador/grafico-indicador.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';

@NgModule({
  declarations: [
    HomeComponent,
    DetalleIndicadorComponent,
    GraficoIndicadorComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({echarts:() => import('echarts')}),
    
 
  ]

 
})
export class IndicadoresModule { }
