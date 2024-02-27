import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'my-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'awesome-form';
  constructor(
    private authService: AuthServiceService
  ){}
  ngOnInit(): void {
      this.authService
  }
}
