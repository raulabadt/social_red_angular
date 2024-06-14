import { Component } from '@angular/core';
import { RouterOutlet,Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  constructor(private router: Router) {}
  redirectLogin(){
    this.router.navigate(['/login']);
  }
}
