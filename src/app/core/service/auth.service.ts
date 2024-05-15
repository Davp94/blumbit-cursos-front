import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtToken: string | null = null;
  private apiUrl = environment.API_URL+'/auth/login';
  constructor(private http: HttpClient) { }

  login(credentials: LoginDto): Observable<any>{
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap((response) => {
        console.log("🚀 ~ AuthService ~ tap ~ response:", response)
        this.jwtToken = response.token;
        localStorage.setItem('token', response.token);
      })
    )
  }

  getToken(): string | null {
    if(!this.jwtToken){
      this.jwtToken = localStorage.getItem('token');
    }
    return this.jwtToken
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }
}
