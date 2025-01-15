import { Component, computed, inject, input, Signal } from '@angular/core';
import { AnnualData } from '../../interfaces/AnnualData';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent 
{

  private investmentService = inject(InvestmentService);
  datosTabla = this.investmentService.getData();

  hayDatos: Signal<boolean> = computed(() => this.datosTabla().length > 0);
}
