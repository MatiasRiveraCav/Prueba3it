import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.css'],
})
export class DetalleIndicadorComponent implements OnInit {
  listaIndicadores!: any;

  termino: string | null = '';
  title: string | null = '';
  periodo: string = '2023/03';
  

  constructor(
    private indicador: IndicadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.termino = this.route.snapshot.paramMap.get('nombre');
    this.title = this.route.snapshot.paramMap.get('nombre');
    
    this.listar();
  }

  listar() {
    this.listaIndicadores = [];

    if (this.termino == 'ipc') {
      this.periodo = '2023';
    }

    if (this.termino == 'utm') {
      this.periodo = '2023';
    }
    if (this.termino == 'dolar') {
      this.periodo = 'periodo/2023/02/dias_i/23/2023/03/dias_f/22';
    }
    if (this.termino == 'euro') {
      this.periodo = 'periodo/2023/02/dias_i/23/2023/03/dias_f/22';
    }
    if (this.termino == 'uf') {
      this.periodo = 'periodo/2023/02/dias_i/23/2023/03/dias_f/22';
    }
      this.indicador
        .getIndicadores(this.termino, this.periodo)
        .subscribe((resp) => {
          console.log(resp);
          if (this.termino == 'dolar') {
            this.listaIndicadores = resp.Dolares.reverse();
          }
          if (this.termino == 'euro') {
            this.listaIndicadores = resp.Euros.reverse();
          }
          if (this.termino == 'ipc') {
            this.listaIndicadores = resp.IPCs.reverse();
          }
          if (this.termino == 'uf') {
            this.listaIndicadores = resp.UFs.reverse();
          }
          if (this.termino == 'utm') {
            this.listaIndicadores = resp.UTMs.reverse();
          }
        });
    
  }
}
