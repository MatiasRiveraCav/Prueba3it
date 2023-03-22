import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { IndicadoresService } from './indicadores.service';

describe('Prueba a IndicadoresService', () => {
  let service: IndicadoresService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    service = TestBed.inject(IndicadoresService);
  });

  it('Debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
});
