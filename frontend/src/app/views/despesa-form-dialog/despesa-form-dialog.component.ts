import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DespesaService } from 'src/app/shared/service/despesa.service';

@Component({
  selector: 'app-despesa-form-dialog',
  templateUrl: './despesa-form-dialog.component.html',
  styleUrls: ['./despesa-form-dialog.component.css']
})
export class DespesaFormDialogComponent implements OnInit {


  public despesasForm: FormGroup;

  constructor(
    private despesaService: DespesaService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DespesaFormDialogComponent>
  ){}

  ngOnInit(): void {
    this.despesasForm = this.fb.group({
      titulo: ['', [Validators.required]],
      mes: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      categoria: ['', [Validators.required]],

  })
}


  criarDespesa(): void {
    this.despesaService.postDespesas(this.despesasForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.despesasForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.despesasForm.reset();
  }

}
