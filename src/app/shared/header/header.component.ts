import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() titulo: string | null = ''

  btnBack: boolean = false

  constructor(private route: Router){}


  ngOnInit(): void {
    this.validarTitulo();
  }
  

  regresar(){
    this.route.navigate(['**'])
  }


  validarTitulo(){
    if(this.titulo !== 'Indicadores' ){
      this.btnBack = true;
    }
  }

}
