import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({ 
  selector: 'app-home', 
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //area da logica e dinamicidade da aplicação
  constructor(private router: Router) {}

  login(){
    this.router.navigate(['/dashboard']);
  } 

}
