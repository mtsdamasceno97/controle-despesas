import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DespesaService } from 'src/app/shared/service/despesa.service';
import { Despesa } from 'src/app/shared/models/despesa.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico-despesas',
  templateUrl: './grafico-despesas.component.html',
  styleUrls: ['./grafico-despesas.component.css']
})
export class GraficoDespesasComponent implements OnInit, OnChanges {
  @ViewChild('graficoDespesas', { static: true }) elemento: ElementRef;
  @Input() selectedMonth: string;
  @Output() selectedMonthChange: EventEmitter<string> = new EventEmitter<string>();
  despesas: Despesa[] = [];

  constructor(private despesaService: DespesaService) {}

  ngOnInit(): void {
    this.getDespesas();
  }

  ngOnChanges(): void {
    this.updateChart();
  }

  private getDespesas(): void {
    this.despesaService.getDespesas().subscribe((despesas: Despesa[]) => {
      this.despesas = despesas;
    });
  }

  private updateChart(): void {
    if (!this.elemento || !this.despesas || this.despesas.length === 0) {
      return;
    }

    // Filtrar as despesas pelo mês selecionado
    const despesasFiltradas = this.despesas.filter(
      (despesa) => despesa.mes.toLowerCase() === this.selectedMonth.toLowerCase()
    );

    // Agrupar as despesas por categoria e somar os valores
    const categorias = [];
    const valores = [];

    despesasFiltradas.forEach((despesa) => {
      const index = categorias.indexOf(despesa.categoria);

      if (index !== -1) {
        valores[index] += despesa.valor;
      } else {
        categorias.push(despesa.categoria);
        valores.push(despesa.valor);
      }
    });

    // Criar o gráfico utilizando a biblioteca Chart.js
    new Chart(this.elemento.nativeElement, {
      type: 'pie',
      data: {
        labels: categorias,
        datasets: [
          {
            data: valores,
            backgroundColor: [
              '#0095ff',
              '#ff6600',
              '#ffea00',
              '#ff0000',
            ],
          },
        ],
      },
    });
  }
}
