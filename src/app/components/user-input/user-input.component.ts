import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserData } from '../../interfaces/UserData';

@Component({
  selector: 'app-user-input',
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent 
{

  datosUsuario = output<UserData>();

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
    this.datosUsuario.emit(this.formulario.value);
  }

}
