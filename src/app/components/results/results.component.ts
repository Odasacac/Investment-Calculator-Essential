import { Component, input } from '@angular/core';
import { AnnualData } from '../../interfaces/AnnualData';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent 
{
  datosTabla = input.required<AnnualData>();
}
