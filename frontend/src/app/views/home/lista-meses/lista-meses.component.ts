import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/shared/models/despesa.model';
import { DespesaService } from 'src/app/shared/service/despesa.service';

@Component({
  selector: 'app-lista-meses',
  templateUrl: './lista-meses.component.html',
  styleUrls: ['./lista-meses.component.css']
})
export class ListaMesesComponent implements OnInit {

  despesas: any;
  erro: any;

  constructor(private despesaService: DespesaService){ }

  ngOnInit(): void {
    this.getter();
  }
  
  getter(){
    this.despesaService.getDespesas().subscribe(
      (data: Despesa) => {
        this.despesas = data;
      },
      (error: any) => {
        this.erro = error
        console.error(error);
      }
    );
  }

}
