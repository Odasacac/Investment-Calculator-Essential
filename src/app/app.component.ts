import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ResultsComponent } from './components/results/results.component';
import { UserData } from './interfaces/UserData';
import { AnnualData } from './interfaces/AnnualData';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{

 
}
