import { GetCategoriasDto } from './../dto/get-categorias.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateCategoriasDto } from '../dto/create-categorias.dto';
import { CategoriasBuilder } from '../builder/categorias.builder';
import { environment } from '../../../environments/environment.development';
import { CategoriasDomain } from '../domain/categorias.domain';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = environment.API_URL+'/categoria';

  constructor(private http: HttpClient) { }
  getCategorias(): Observable<CategoriasDomain[]> {
    return this.http.get<GetCategoriasDto[]>(this.apiUrl).pipe(
       map(categorias => categorias.map(CategoriasBuilder.fromDtoToDomain)));
  }

  getCategoriaById(id: number): Observable<CategoriasDomain> {
    return this.http.get<GetCategoriasDto>(`${this.apiUrl}/${id}`).pipe(
      map(CategoriasBuilder.fromDtoToDomain));
  }

  createCategoria(categoria: CreateCategoriasDto): Observable<CategoriasDomain>{
    return this.http.post<GetCategoriasDto>(this.apiUrl, categoria).pipe(
      map(CategoriasBuilder.fromDtoToDomain)
    );
  }

  updateCategoria(categoria: CreateCategoriasDto, id: number): Observable<CategoriasDomain> {
    return this.http.put<GetCategoriasDto>(`${this.apiUrl}/${id}`, categoria).pipe(
      map(CategoriasBuilder.fromDtoToDomain)
    );
  }

  enableCategoria(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/enable/${id}`, {});
  }

  deleteCategoria(id: number): Observable<void>  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  logicDeleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/logic/${id}`);
  }

  generateCategoriasListPdf(): Observable<any> {
    return this.http.get(environment.API_URL+'/pdf', {responseType: 'blob'});
  }

}
