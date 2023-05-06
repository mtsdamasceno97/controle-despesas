import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespesaFormDialogComponent } from './despesa-form-dialog/despesa-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog
  ){ }

  ngOnInit(): void {

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
}
