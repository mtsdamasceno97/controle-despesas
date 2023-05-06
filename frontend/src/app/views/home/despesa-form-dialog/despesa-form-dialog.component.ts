import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-despesa-form-dialog',
  templateUrl: './despesa-form-dialog.component.html',
  styleUrls: ['./despesa-form-dialog.component.css']
})
export class DespesaFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DespesaFormDialogComponent>
  ){}

  ngOnInit(): void {
    
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
