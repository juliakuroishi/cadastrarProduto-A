import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutoService } from '../../services/produtos.service';
import { Form } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  produtos: Produto[] = []; // lista de produtos em memória
  modalAberta  = false; // controla se o modal aparece ou não

  constructor(private router: Router, private produtoService: ProdutoService) {
    this.produtos = this.produtoService.listar();
  }

  logout(){
    this.router.navigate(['']);
  } 

  abrirModal() {
    this.modalAberta  = true;
  }

  fecharModal() {
    this.modalAberta  = false;
  }

  cadastrarProduto(produto: Produto) {
    this.produtoService.adicionar(produto);
    this.produtos = this.produtoService.listar();
    this.fecharModal();
  }

  editarProduto(){
    console.log('editar')
  }
}
