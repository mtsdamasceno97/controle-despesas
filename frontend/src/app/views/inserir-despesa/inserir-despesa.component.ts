import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaFormDialogComponent } from '../despesa-form-dialog/despesa-form-dialog.component';

@Component({
  selector: 'app-inserir-despesa',
  templateUrl: './inserir-despesa.component.html',
  styleUrls: ['./inserir-despesa.component.css']
})
export class InserirDespesaComponent {


  constructor(
    public dialog: MatDialog
  ) { }



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


}
