import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { GetCursosDto } from '../../../core/dto/get.cursos.dto';
import { CursosService } from '../../../core/service/cursos.service';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-cursos-main',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './cursos-main.component.html',
  styleUrl: './cursos-main.component.scss',
  providers: [CursosService],
})
export class CursosMainComponent {
  hostImages = environment.API_URL+'/images/'

  cursos!: GetCursosDto[];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this.cursosService.getCursos(0, 10, 'curId', 1, '').subscribe({
      next: (data) => (this.cursos = data.content),
    });
  }

}
