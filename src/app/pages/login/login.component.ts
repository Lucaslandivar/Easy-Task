import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensagemLogin: string = '';

  constructor(private router: Router, private shared: SharedService) {}

  btnLogin(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      // Sucesso
      this.mensagemLogin = 'Correto!';
      this.shared.setUsername('lucas.landivar');
      this.router.navigate(['home']);
    } else {
      // Falha
      this.mensagemLogin = 'Incorreto!';
    }
  }
}
