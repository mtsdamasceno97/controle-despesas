import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/shared/models/despesa.model';
import { DespesaService } from 'src/app/shared/service/despesa.service';
import { DespesaFormDialogComponent } from '../despesa-form-dialog/despesa-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-meses',
  templateUrl: './lista-meses.component.html',
  styleUrls: ['./lista-meses.component.css']
})
export class ListaMesesComponent implements OnInit {
  selectedMonth: string;
  despesaTotal: number;
  filteredDespesas: Despesa[] = [];
  despesas: Despesa[] = [];
  erro: any;
  months = [
    { name: 'Janeiro' },
    { name: 'Fevereiro' },
    { name: 'Março' },
    { name: 'Abril' },
    { name: 'Maio' },
    { name: 'Junho' },
    { name: 'Julho' },
    { name: 'Agosto' },
    { name: 'Setembro' },
    { name: 'Outubro' },
    { name: 'Novembro' },
    { name: 'Dezembro' },
  ];

  constructor(private despesaService: DespesaService, public dialog: MatDialog, private location: Location) {}

  ngOnInit(): void {
    this.getter();
  }

  somaDespesas(mes) {
    let despesasFiltradas = this.despesas.filter(
      (despesa) => despesa.mes.toLowerCase() === mes.toLowerCase()
    );
    this.despesaTotal = despesasFiltradas.reduce((total, despesa) => total + despesa.valor, 0);
  }
  

  filterDespesas(): void {
    this.filteredDespesas = this.despesas.filter(
      (despesa) => despesa.mes.toLowerCase() === this.selectedMonth.toLowerCase()
    );
    this.somaDespesas(this.selectedMonth);
    this.onSelectedMonthChange(this.selectedMonth);
  }

  adicionarDespesa(): void {
    const dialogRef = this.dialog.open(DespesaFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      location.reload();
    });
  }

  deleteDespesa(id: number) {
    try {
      this.despesaService.deleteDespesa(id.toString()).subscribe();
    } catch (error) {
      console.log(error);
    }
  }

  updateDespesa(id: string, despesa: Despesa) {
    return 'produto alterado';
  }

  getter() {
    this.despesaService.getDespesas().subscribe((data) => {
      this.despesas = data;
    });
  }

  onSelectedMonthChange(month: string) {
    this.selectedMonth = month;
    this.filterDespesas();
  }
}
