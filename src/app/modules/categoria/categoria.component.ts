import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriaTableComponent } from './categoria-table/categoria-table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriasService } from '../../core/service/categorias.service';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, CategoriaTableComponent, DialogModule, ButtonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
  providers: [CategoriasService],
})
export class CategoriaComponent implements OnInit{
  visible: boolean = false;

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  showDialog() {
    this.visible = true;
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => console.log(data),
    });
  }
}
