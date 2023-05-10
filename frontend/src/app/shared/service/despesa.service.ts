import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Despesa } from '../models/despesa.model';


@Injectable({
  providedIn: 'root'
})

export class DespesaService {

  constructor(private http: HttpClient) { }

  public getDespesas(): Observable<any> {
    
    return this.http.get('http://localhost:3333/despesas');
  
  }

  public postDespesas(despesa: any): Observable<Despesa> {
    return this.http.post<any>('http://localhost:3333/despesas', despesa)
  }


  public deleteDespesa (id: string): Observable<Despesa>{
    const despesaUrl = 'http://localhost:3333/despesas/'+id;
    
   return this.http.delete<Despesa>(despesaUrl); 

  }

  public updateDespesa (id: string, despesa: Despesa): Observable<Despesa>{

    const despesaUrl = 'http://localhost:3333/products/'+id;
    
   return this.http.put<Despesa>(despesaUrl, despesa); 

  }

}

  
 

