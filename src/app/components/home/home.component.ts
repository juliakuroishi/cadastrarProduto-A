import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ //avisa que esse arquivo é um componente
  selector: 'app-home', //como usar ele 
  imports: [],
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
