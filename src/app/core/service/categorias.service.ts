import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = 'http://localhost:8100/categoria';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any>(this.apiUrl);
  }

  getCategoriaById(id: number){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCategoria(categoria: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, categoria);
  }

  updateCategoria(categoria: any, id: number){
    return this.http.put(`${this.apiUrl}/${id}`, categoria);
  }

  deleteCategoria(id: number){
    this.http.delete(`${this.apiUrl}/${id}`);
  }

}
