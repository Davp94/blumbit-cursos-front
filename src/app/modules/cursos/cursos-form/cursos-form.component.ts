import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CursosService } from '../../../core/service/cursos.service';
import { MessageService } from 'primeng/api';
import { GetCursosDto } from '../../../core/dto/get.cursos.dto';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriasService } from '../../../core/service/categorias.service';
import { CategoriasDomain } from '../../../core/domain/categorias.domain';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [ToastModule, CommonModule, ButtonModule, ReactiveFormsModule, FileUploadModule, DropdownModule, InputTextModule, InputTextareaModule],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss',
  providers: [CursosService, CategoriasService, MessageService]
})
export class CursosFormComponent implements OnInit{
  uploadedFiles: any[] = [];
  categorias!: CategoriasDomain[];
  headers: HttpHeaders
  formCurso!: FormGroup;
  @Output() hideDialog: EventEmitter<boolean> = new EventEmitter();


  constructor(private categoriasService: CategoriasService, private cursosService: CursosService, private messageService: MessageService){
    this.formCurso = new FormGroup({
      curNombre: new FormControl(''),
      curDescripcion: new FormControl(''),
      curBanner: new FormControl(''),
      categoria: new FormControl('')
    })

    this.headers = new HttpHeaders().set('Authorization', `${localStorage.getItem('token')}`);

  }
  ngOnInit(): void {
    this.getCategorias();
  }

  closeDialog(created: boolean) {
    this.hideDialog.emit(created);
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => this.categorias = data,
    });
  }

  saveCurso() {
    if(this.formCurso.valid){
      const cursoDto: GetCursosDto = this.formCurso.value;
      console.log("🚀 ~ CursosFormComponent ~ saveCurso ~ this.formCurso.value:", this.formCurso.value)
    } 
  }

  onUpload(event: any) {
    console.log("🚀 ~ CursosFormComponent ~ onUpload ~ event:", event)
    const fomrData = new FormData();
    fomrData.append('file', event.files[0] )
    this.cursosService.adjuntos(fomrData).subscribe({
      next: res => this.formCurso.get('curBanner')?.setValue(res.filePath),
      error: error => console.log(error)
    })
  }

}
