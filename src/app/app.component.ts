import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { ResultsComponent } from './components/results/results.component';
import { UserData } from './interfaces/UserData';
import { AnnualData } from './interfaces/AnnualData';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{

  annualData: AnnualData [] = [];


  datosRecibidos(datosUsuarioRecibidos: UserData)
  {
    this.annualData = this.investmentResult(datosUsuarioRecibidos);
  }

  investmentResult(userData: UserData): AnnualData []
  {
    const annualData: AnnualData [] = [];
    let investmentValue = userData.initialInvestment;
    
    for (let i = 0; i < userData.duration; i++) 
    {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userData.annualInvestment;
      const totalInterest = investmentValue - userData.annualInvestment * year - userData.initialInvestment;
      const annualDataDatos: AnnualData =
      {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userData.initialInvestment + userData.annualInvestment * year,
      }
      
      annualData.push(annualDataDatos);
        
      }
    
      return annualData;
  }
}
