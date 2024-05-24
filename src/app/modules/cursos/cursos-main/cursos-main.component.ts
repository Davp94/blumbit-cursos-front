import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { GetCursosDto } from '../../../core/dto/get.cursos.dto';
import { CursosService } from '../../../core/service/cursos.service';
import { environment } from '../../../../environments/environment.development';
import { DialogModule } from 'primeng/dialog';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-cursos-main',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    CursosFormComponent
  ],
  templateUrl: './cursos-main.component.html',
  styleUrl: './cursos-main.component.scss',
  providers: [CursosService, MessageService],
})
export class CursosMainComponent {
  cursosDialog: boolean = false;
  hostImages = environment.API_URL+'/images/'

  cursos!: GetCursosDto[];

  constructor(private cursosService: CursosService, private messageService: MessageService) {}

  ngOnInit() {
    this.getCursos();
  }

  crearCurso() {
    this.cursosDialog = true;
  }

  getCursos() {
    this.cursosService.getCursos(0, 10, 'curId', 1, '').subscribe({
      next: (data) => (this.cursos = data.content),
    });
  }

  hideDialog(event: boolean) {
    this.cursosDialog = false;
    if(event){
      this.getCursos();
    }
}
}
