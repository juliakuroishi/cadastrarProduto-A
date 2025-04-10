import { Injectable } from '@angular/core';


// define oq deve contem o produto:
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
  // cria a lista de produtos, inicialmente vazia
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Bília de Estudo',
      preco: 120.50,
      descricao: 'NTLH, letra grande, capa dura',
      validade: new Date('2050-12-31'),
      imagem: 'assets/imagens/biblia.jpg'
    }
  ];
  private proximoId = 2;


  //  ======= Métodos =========
  // lista os produtos do array
  listar(): Produto[] {
    return this.produtos;
  }
  

  // adiciona produtos
  adicionar(produto: Produto) {
    produto.id = this.proximoId++;
    this.produtos.push(produto);
  }


  // deleta produto (função chamada pelo deletar do dash)
  deletar(produto: Produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    
    if (index > -1) {
      this.produtos.splice(index, 1); // remove da lista
    }
  }


  // atualiza o produto
  atualizar(produto: Produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
  
    if (index > -1) {
      this.produtos[index] = produto;
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
    }
  }
  
}
