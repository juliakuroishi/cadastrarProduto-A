import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto, ProdutoService } from '../../services/produtos.service';
import {FormComponent} from '../form/form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';


@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatIconModule, MatDividerModule, CommonModule, FormComponent, MatCardModule, SidebarComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  produtos: Produto[] = []; // lista de produtos em memória
  modalAberta  = false; // controla se o modal aparece ou não

  constructor( private produtoService: ProdutoService, private dialog:MatDialog) {
    this.produtos = this.produtoService.listar();
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
  
  editarProduto(produto: Produto) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: { ...produto } // cuidado pra não editar direto o original
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.acao === 'salvar') {
        this.produtoService.atualizar(result.produto);
        this.produtos = this.produtoService.listar();
      }
  
      if (result?.acao === 'deletar') {
        this.produtoService.deletar(result.produto);
        this.produtos = this.produtoService.listar();
      }
    });
  }
  
  
}
