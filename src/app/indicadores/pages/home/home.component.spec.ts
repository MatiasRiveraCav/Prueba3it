import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../../shared/header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatListModule,
        MatDividerModule,
        MatIconModule,
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [HomeComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
