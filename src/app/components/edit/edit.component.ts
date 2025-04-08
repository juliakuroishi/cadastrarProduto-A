import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../services/produtos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-modal-editar',
  imports: [FormsModule, CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})

export class EditComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public produto: Produto,
    private dialogRef: MatDialogRef<EditComponent>
  ) {}
  

  salvar() {
    this.dialogRef.close({ acao: 'salvar', produto: this.produto });
  }

  deletar() {
    this.dialogRef.close({ acao: 'deletar', produto: this.produto });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
