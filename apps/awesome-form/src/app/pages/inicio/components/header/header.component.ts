import { ButtonInitComponent } from './../../../../../../../../libs/src/lib/share/buttonsInit/buttonInit.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'my-monorepo-header',
  standalone: true,
  imports: [CommonModule,ButtonInitComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router){}
  login(){
    this.router.navigate(["/login"])
    console.log('login');
    
  }
  register(){
    this.router.navigate(["/register"])
    console.log('register');

  }
}
