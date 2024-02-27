import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-monorepo-another-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anotherInput.component.html',
  styleUrl: './anotherInput.component.css',
})
export class AnotherInputComponent {}
