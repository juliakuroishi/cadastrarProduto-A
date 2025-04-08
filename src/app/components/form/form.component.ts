import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../services/produtos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    imagem: ''
  };

  salvar() {
    // Emite o produto pro componente pai (Dashboard)
  this.produtoCadastrado.emit(this.produto);

  // Recupera produtos do localStorage
  const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || '[]');

  // Adiciona o novo produto
  produtosSalvos.push(this.produto);

  // Salva de volta no localStorage
  localStorage.setItem('produtos', JSON.stringify(produtosSalvos));  

  // Limpa o formulário
  this.produto = { 
    id: 0, 
    nome: '', 
    preco: 0, 
    descricao: '', 
    validade: new Date(), 
    imagem: '' 
    };
  }

  cancelarForm() {
    this.cancelar.emit();
  }

  

}
  
  

