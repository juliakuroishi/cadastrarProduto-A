import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, MatDividerModule, MatButtonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout(){
    this.router.navigate(['']);
  } 
}
