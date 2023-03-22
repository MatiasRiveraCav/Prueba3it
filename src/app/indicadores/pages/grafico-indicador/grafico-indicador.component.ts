import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartsOption } from 'echarts';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-grafico-indicador',
  templateUrl: './grafico-indicador.component.html',
  styleUrls: ['./grafico-indicador.component.css'],
})
export class GraficoIndicadorComponent {
  listaIndicadores!: any;
  termino: string | null = '';
  title: string | null = '';
  unidad: string | null = '';
  valor: any = '';
  periodo: string = '2023/03';
  listaFechas: any[] = [];
  listaValores: any[] = [];
  chartOption: EChartsOption = {};
  chartValores: any[]=[];
  chartFechas: any[]=[];

  constructor(
    private indicador: IndicadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.termino = this.route.snapshot.paramMap.get('nombre');
    this.title = this.route.snapshot.paramMap.get('nombre');
    this.unidad = this.route.snapshot.paramMap.get('unidad');
    this.getData();
  }

  getData() {
    if (this.termino == 'ipc') {
      this.periodo = 'periodo/2022/02/2023/03';
    }
    if (this.termino == 'utm') {
      this.periodo = 'periodo/2022/03/2023/03';
    }
    this.indicador
      .getIndicadores(this.termino, this.periodo)
      .subscribe((resp) => {
        if (this.termino == 'dolar') {
          this.listaIndicadores = resp.Dolares;
          this.valor = this.listaIndicadores.pop();
        }
        if (this.termino == 'euro') {
          this.listaIndicadores = resp.Euros;
          this.valor = this.listaIndicadores.pop();
        }
        if (this.termino == 'ipc') {
          this.listaIndicadores = resp.IPCs;
          this.valor = this.listaIndicadores.pop();
        }
        if (this.termino == 'uf') {
          this.listaIndicadores = resp.UFs;
          this.valor = this.listaIndicadores.pop();
        }
        if (this.termino == 'utm') {
          this.listaIndicadores = resp.UTMs;
          this.valor = this.listaIndicadores.pop();
        }
        for (let i = 0; i < this.listaIndicadores.length; i++) {
          this.listaFechas.push(this.listaIndicadores[i].Fecha);
          this.listaValores.push(parseInt(this.listaIndicadores[i].Valor));
        }

        if (
          this.termino === 'dolar' ||
          this.termino === 'uf' ||
          this.termino === 'euro'
        ) {
          
          this.listaValores.reverse();
          this.chartValores = this.listaValores.slice(0, 10);
          this.listaFechas.reverse();
          this.chartFechas = this.listaFechas.slice(0, 10);
        }
        if (
          this.termino === 'ipc' ||
          this.termino === 'utm' 
        ) {
          
          this.listaValores.reverse();
          this.chartValores = this.listaValores;
          this.listaFechas.reverse();
          this.chartFechas = this.listaFechas;
        }
        this.chartOption = {
          xAxis: {
            type: 'category',
            data: this.chartFechas,
          },
          yAxis: {},
          series: [
            {
              type: 'line',
              data: this.chartValores,
            },
          ],
        };
      });
  }
}
