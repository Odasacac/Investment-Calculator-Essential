import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/UserData';
import { AnnualData } from '../interfaces/AnnualData';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService 
{
  calculateInvestmentResult(userData: UserData): AnnualData []
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
