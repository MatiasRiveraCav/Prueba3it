import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIndicadorComponent } from './detalle-indicador.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../../shared/header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

describe('DetalleIndicadorComponent', () => {
  let component: DetalleIndicadorComponent;
  let fixture: ComponentFixture<DetalleIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule, MatListModule, MatDividerModule],
      declarations: [DetalleIndicadorComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
