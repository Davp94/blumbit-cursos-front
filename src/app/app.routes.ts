import { Routes } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { CategoriaComponent } from './modules/categoria/categoria.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'categoria', component: CategoriaComponent }],
  },
];
