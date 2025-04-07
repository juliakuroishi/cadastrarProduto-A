import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../services/produtos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  @Output() produtoCadastrado = new EventEmitter<Produto>();  
  @Output() cancelar = new EventEmitter<void>();

  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    descricao: '',
    validade: new Date(),
    foto: ''
  };

  salvar() {
    this.produtoCadastrado.emit(this.produto);
    this.produto = { 
      id: 0, nome: '', 
      preco: 0, descricao: '', 
      validade: new Date(), 
      foto: '' 
    };
  }

  cancelarForm() {
    this.cancelar.emit();
  }
}
