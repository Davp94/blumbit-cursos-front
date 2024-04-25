import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CategoriaComponent } from './modules/categoria/categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterOutlet, CategoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  greeting = 'HOLA MUNDO';
  greeting2 = '';
}
