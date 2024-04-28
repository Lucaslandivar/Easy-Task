import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrl: './terceiro-componente.component.css',
})
export class TerceiroComponenteComponent {
  nome: string;
  email: string;
  mensagem: string;

  constructor() {
    this.nome = '';
    this.email = '';
    this.mensagem = '';
  }
  enviarFormulario(): void {
    console.log(this.nome);
    console.log(this.email);
    console.log(this.mensagem);
  }
}
