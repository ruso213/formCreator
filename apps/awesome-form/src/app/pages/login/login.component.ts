import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetLoginComponent } from './components/targetLogin/targetLogin.component';
import { InputStatesComponent } from './components/inputStates/inputStates.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-monorepo-login',
  standalone: true,
  imports: [CommonModule,TargetLoginComponent,InputStatesComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl()

  })
  a=''
  submitForm(){
    console.log(this.formGroup.value);
  }
  submitNgModel(){
    console.log(this.a);
  }
}
