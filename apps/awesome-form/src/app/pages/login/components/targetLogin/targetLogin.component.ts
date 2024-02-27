import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../../../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-monorepo-target-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targetLogin.component.html',
})
export class TargetLoginComponent {
  constructor(
    private authService:AuthServiceService,
    private router: Router
  ){}
  login(){
    this.authService.login()
  }
  getUserInfo(){
    console.log(this.authService.userInfo);
  }
  getAuth(){
    console.log(this.authService.getAuths);
    
  }
  logout(){
    console.log(this.authService.logOut());
    
  }
  register(){
    this.router.navigate(["/register"])
  }
}
