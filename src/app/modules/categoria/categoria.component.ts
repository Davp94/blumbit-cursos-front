import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaTableComponent } from './categoria-table/categoria-table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, CategoriaTableComponent, DialogModule, ButtonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
  providers: []
})
export class CategoriaComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
