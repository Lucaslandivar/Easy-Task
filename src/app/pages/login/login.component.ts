import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensagemLogin: string = '';

  // constructor(private router: Router) {}

  btnLogin(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      // Sucesso
      this.mensagemLogin = 'Correto!';
      // this.router.navigate(['home']);
    } else {
      // Falha
      this.mensagemLogin = 'Incorreto!';
    }
  }
}
