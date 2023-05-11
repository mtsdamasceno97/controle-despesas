import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/shared/models/despesa.model';
import { DespesaService } from 'src/app/shared/service/despesa.service';
import { DespesaFormDialogComponent } from '../despesa-form-dialog/despesa-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-meses',
  templateUrl: './lista-meses.component.html',
  styleUrls: ['./lista-meses.component.css']
})
export class ListaMesesComponent implements OnInit {

  despesas: any;
  erro: any;
  months = [
    { name: 'JANEIRO' },
    { name: 'FEVEREIRO' },
    { name: 'MARÇO' },
    { name: 'ABRIL' },
    { name: 'MAIO' },
    { name: 'JUNHO' },
    { name: 'JULHO' },
    { name: 'AGOSTO' },
    { name: 'SETEMBRO' },
    { name: 'OUTUBRO' },
    { name: 'NOVEMBRO' },
    { name: 'DEZEMBRO' }
  ];

 
  constructor(
    private despesaService: DespesaService,
    public dialog: MatDialog
    ){ }

  ngOnInit(): void {
    this.getter();
  }


  
adicionarDespesa(): void {
  const dialogRef = this.dialog.open(
    DespesaFormDialogComponent, {
      minWidth: '400px'
    }
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('Fim!');
  });
}

  

  deleteDespesa(id: string){

    this.despesaService.deleteDespesa(id).subscribe();

    window.location.reload();

 }

 updateDespesa(id: string, despesa: Despesa){

  return "produto alterado";

  window.location.reload();

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
