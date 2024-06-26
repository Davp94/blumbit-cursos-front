import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriaTableComponent } from './categoria-table/categoria-table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
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

  constructor() {}

  ngOnInit(): void {
  }

  showDialog() {
    this.visible = true;
  }
}
