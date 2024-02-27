import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[MMButtonInit]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttonInit.component.html',
  styleUrl: './buttonInit.component.css',
})
export class ButtonInitComponent {
}
