import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoIndicadorComponent } from './grafico-indicador.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IndicadoresService } from '../../services/indicadores.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../../../shared/header/header.component';
import { SharedModule } from '../../../shared/shared.module';

describe('GraficoIndicadorComponent', () => {
  let component: GraficoIndicadorComponent;
  let fixture: ComponentFixture<GraficoIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [IndicadoresService],
      declarations: [GraficoIndicadorComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
