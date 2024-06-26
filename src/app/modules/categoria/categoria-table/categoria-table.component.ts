import { CategoriasDomain } from './../../../core/domain/categorias.domain';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoriasService } from '../../../core/service/categorias.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriaFormComponent } from '../categoria-form/categoria-form.component';
@Component({
  selector: 'app-categoria-table',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, ToolbarModule, FileUploadModule, TagModule, RatingModule, DialogModule, FormsModule, ConfirmDialogModule, InputTextModule, CategoriaFormComponent],
  templateUrl: './categoria-table.component.html',
  styleUrl: './categoria-table.component.scss',
  providers: [MessageService, ConfirmationService, CategoriasService]
})
export class CategoriaTableComponent {
  categoriaDialog: boolean = false;

  categorias!: CategoriasDomain[];

  categoria!: CategoriasDomain;

  selectedCategorias!: CategoriasDomain[] | null;

  submitted: boolean = false;

  statuses!: any[];

  operation: number = 0;

  constructor(private categoriasService: CategoriasService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit() {
      this.getCategorias();
      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => this.categorias = data,
    });
  }

  openNew(operation: number) {
      this.operation = operation;
      switch(operation){
        case 1:
            this.categoria = {}; 
            break;
        case 2: 
        case 3:
            break;
        default:
            throw('Operacion no permitida');
      }
   
      this.submitted = false;
      this.categoriaDialog = true;
  }

  editCategoria(categoria: CategoriasDomain) {
      this.categoria = { ...categoria };
      this.openNew(2);
  }

  deleteCategoria(categoria: CategoriasDomain) {
      this.confirmationService.confirm({
          message: 'Esta segur@ de eliminar la categoria ' + categoria.nombre + '?',
          header: 'Advertencia !!!',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.categoriasService.deleteCategoria(categoria.id!).subscribe(
                {
                    next: value => {
                      this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'Categoría eliminada' });
                      this.categoria = {};
                      this.getCategorias();
                    }
                }
              )

          }
      });
  }

  hideDialog(event: boolean) {
      this.categoriaDialog = false;
      this.submitted = false;
      if(event){
        this.getCategorias();
      }
  }

  saveProduct() {
      this.submitted = true;

      if (this.categoria.nombre?.trim()) {
          if (this.categoria.id) {
              this.categorias[this.findIndexById(this.categoria.id)] = this.categoria;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          } else {
              this.categoria.id = this.createId();
              this.categorias.push(this.categoria);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }

          this.categorias = [...this.categorias];
          this.categoriaDialog = false;
          this.categoria = {};
      }
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.categorias.length; i++) {
          if (this.categorias[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): number {
      let id = 0;
      return this.categorias.length+1;
  }

  downloadPdf() {
    this.categoriasService.generateCategoriasListPdf().subscribe({
      next: (res) => {
        const url = window.URL.createObjectURL(res);
        window.open(url);
        window.URL.revokeObjectURL(url);
      },
      error: (error) =>console.log(error)
    });
  }
}
