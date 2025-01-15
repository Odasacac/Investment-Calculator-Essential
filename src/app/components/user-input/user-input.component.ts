import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserData } from '../../interfaces/UserData';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent 
{

  private investmentService = inject(InvestmentService);

  camposFormulario =
  {
    initialInvestment: new FormControl(''),
    annualInvestment: new FormControl(''),
    expectedReturn: new FormControl (''),
    duration: new FormControl('')
  }

  formulario: FormGroup = new FormGroup(this.camposFormulario);

  onSubmit()
  {
    this.investmentService.calculateInvestmentResult(this.formulario.value);
  }

}
