// eslint-disable-next-line @nx/enforce-module-boundaries
import { HeaderComponent } from 'apps/awesome-form/src/app/pages/inicio/components/header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-monorepo-inicio',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {}
