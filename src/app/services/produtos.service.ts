import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  validade: Date;
  foto: string; // url da imagem
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

  remover(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
