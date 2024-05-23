import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiUrl = environment.API_URL+'/cursos';
  constructor(private http: HttpClient) { }

  getCursos(page: number, size: number, sortParam: string, order: number, nombre: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, {params: {page: page, size: size, sortParam: sortParam, order: order, nombre: nombre}});
  }

  createCursos(curso: any): Observable<any>  {
    return this.http.post<any>(`${this.apiUrl}`, curso);
  }

  buyCurso(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario`, data);
  }

  adjuntos(file: File): Observable<any> {
    return this.http.post<any>(environment.API_URL+'/adjuntos', file);
  }
}
