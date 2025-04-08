import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  validade: Date;
  imagem: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];
  private proximoId = 1;

  listar(): Produto[] {
    return this.produtos;
  }

  adicionar(produto: Produto) {
    produto.id = this.proximoId++;
    this.produtos.push(produto);
  }

  deletar(produto: Produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    
    if (index > -1) {
      this.produtos.splice(index, 1); // remove da lista
    }
  }

  atualizar(produto: Produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
  
    if (index > -1) {
      this.produtos[index] = produto;
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
    }
  }
  
}
