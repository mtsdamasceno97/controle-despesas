import { Component } from '@angular/core';
import { Despesa } from 'src/app/shared/models/despesa.model';
import { DespesaService } from 'src/app/shared/service/despesa.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-despesas',
  templateUrl: './edit-despesas.component.html',
  styleUrls: ['./edit-despesas.component.css']
})
export class EditDespesasComponent {

  despesa: Despesa;
  btnText: string = 'Editar';


  constructor(
    private despesaService: DespesaService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.despesaService.getDespesaById(id).subscribe((item) => {
      this.despesa = item;
    });
  }
}
