import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../core/service/auth.service';
import { LoginDto } from '../../../core/dto/login.dto';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  providers: [AuthService, MessageService]
})
export class LoginComponent {
  password!: string;
  username!: string;

  constructor(private _authService: AuthService, private router: Router, private messageService: MessageService){}

  login(){
    const loginData: LoginDto = {username: this.username, password: this.password}
    console.log("🚀 ~ LoginComponent ~ login ~ loginData:", loginData)
    this._authService.login(loginData).subscribe({
      next: (res) => {
        console.log("🚀 ~ LoginComponent ~ this._authService.login ~ res:", res)
        this.messageService.add({ severity: 'success', summary: 'Operacion Exitosa', detail: 'LOGIN' });
        this.router.navigateByUrl("/");
      },
      error: (error) => {
        console.log("🚀 ~ LoginComponent ~ this._authService.login ~ error:", error)
        this.messageService.add({ severity: 'danger', summary: 'Error login', detail: 'LOGIN' });
      }
    })
  }
}
