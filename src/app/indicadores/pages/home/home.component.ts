import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  indicadores = [
    {
      nombre: 'dolar',
      unidad: 'pesos'
    },
    {
      nombre: 'euro', 
      unidad: 'pesos'
    },
    {
      nombre: 'ipc',
      unidad: 'porcentaje'
    },
    {
      nombre:  'uf',
      unidad: 'pesos'
    },
    {
      nombre:  'utm',
      unidad: 'pesos'
    },
  ];

  

 
}
