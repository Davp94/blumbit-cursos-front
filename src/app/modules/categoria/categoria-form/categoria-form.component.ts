import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CategoriasDomain } from '../../../core/domain/categorias.domain';
import { CategoriasService } from '../../../core/service/categorias.service';
import { CreateCategoriasDto } from '../../../core/dto/create-categorias.dto';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, InputTextareaModule, FormsModule, ToastModule],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.scss',
  providers: [CategoriasService],
})
export class CategoriaFormComponent implements OnInit, OnChanges {
  // /!->asegura que recibe dato
  @Input() categoria!: CategoriasDomain;
  // /?->condiciona que tiene un valor o es nulo
  @Input() operation!: number;
  @Output() hideDialog: EventEmitter<boolean> = new EventEmitter();
  submitted: boolean = false;
  categoriaNombre: string;
  categoriaDescripcion: string

  constructor(private categoriasService: CategoriasService, private messageService: MessageService){
    this.categoriaNombre = '';
    this.categoriaDescripcion = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    if(this.categoria){
      this.categoriaNombre = String(this.categoria.nombre);
      this.categoriaDescripcion = String(this.categoria.descripcion);
    }
    console.log('INIT COMPONENT');
    console.log('categoria', this.categoria);
    console.log('operation', this.operation);
  }

  closeDialog(created: boolean) {
    this.hideDialog.emit(created);
  }

  saveCategoria() {
    if(this.operation == 1){
      const categoriasDto: CreateCategoriasDto = {nombre: this.categoria.nombre!, descripcion: this.categoria.descripcion!}
      console.log("🚀 ~ CategoriaFormComponent ~ saveProduct ~ categoriasDto:", categoriasDto);
      this.categoriasService.createCategoria(categoriasDto).subscribe(
        {
          next: value => {
            this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'Categoría creada' });
            this.closeDialog(true);
          }
        }
      );
    }else {
      const categoriasDto: CreateCategoriasDto = {nombre: this.categoria.nombre!, descripcion: this.categoria.descripcion!}
      console.log("🚀 ~ CategoriaFormComponent ~ saveCategoria ~ this.categoria:", this.categoria)
      this.categoriasService.updateCategoria(categoriasDto, this.categoria.id!).subscribe(
        {
          next: value => {
            this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'Categoría actualizada' });
            this.closeDialog(true);
          }
        }
      );
    }
    this.submitted = true;

    // if (this.categoria.nombre?.trim()) {
    //   if (this.categoria.id) {
    //     this.categorias[this.findIndexById(this.categoria.id)] = this.categoria;
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Updated',
    //       life: 3000,
    //     });
    //   } else {
    //     this.categoria.id = this.createId();
    //     this.categorias.push(this.categoria);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Created',
    //       life: 3000,
    //     });
    //   }

    //   this.categorias = [...this.categorias];
    //   this.categoriaDialog = false;
    //   this.categoria = {};
    // }
  }
}
