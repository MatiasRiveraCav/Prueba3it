import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

 private apiUrl: string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/';
 private apiKey: string = 'apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json';



  constructor(private http: HttpClient) { }


  
  getIndicadores(termino: string | null, periodo: string):Observable<any> {

   return this.http.get<any>(this.apiUrl+termino+'/'+periodo+'?'+this.apiKey);    
    
  }

}
