import { GetCategoriasDto } from './../dto/get-categorias.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateCategoriasDto } from '../dto/create-categorias.dto';
import { CategoriasBuilder } from '../builder/categorias.builder';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl = environment.API_URL+'/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<GetCategoriasDto[]> {
    return this.http.get<GetCategoriasDto[]>(this.apiUrl).pipe(
       map(categorias => categorias.map(CategoriasBuilder.fromDtoToDomain)));
  }

  getCategoriaById(id: number): Observable<GetCategoriasDto> {
    return this.http.get<GetCategoriasDto>(`${this.apiUrl}/${id}`).pipe(
      map(CategoriasBuilder.fromDtoToDomain));
  }

  createCategoria(categoria: CreateCategoriasDto): Observable<GetCategoriasDto>{
    return this.http.post<GetCategoriasDto>(this.apiUrl, categoria).pipe(
      map(CategoriasBuilder.fromDtoToDomain)
    );
  }

  updateCategoria(categoria: CreateCategoriasDto, id: number): Observable<GetCategoriasDto> {
    return this.http.put<GetCategoriasDto>(`${this.apiUrl}/${id}`, categoria).pipe(
      map(CategoriasBuilder.fromDtoToDomain)
    );
  }

  deleteCategoria(id: number): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
