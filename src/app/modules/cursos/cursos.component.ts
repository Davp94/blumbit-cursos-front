import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosMainComponent } from './cursos-main/cursos-main.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CursosMainComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
