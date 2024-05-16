import { Routes } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { CategoriaComponent } from './modules/categoria/categoria.component';
import { CategoriaFormComponent } from './modules/categoria/categoria-form/categoria-form.component';
import { LoginComponent } from './shared/components/login/login.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'categoria', component: CategoriaComponent },
      {
        path: 'cursos',
        component: CategoriaFormComponent,
      },
    ],
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
