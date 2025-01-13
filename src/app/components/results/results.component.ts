import { Component, computed, input, Signal } from '@angular/core';
import { AnnualData } from '../../interfaces/AnnualData';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent 
{
  datosTabla = input.required<AnnualData[]>();

  hayDatos: Signal<boolean> = computed(() => this.datosTabla().length > 0);
}
