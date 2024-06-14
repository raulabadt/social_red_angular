import { Component } from '@angular/core';
import { RouterOutlet,Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
  constructor(private router: Router) {}
    acceder(){
      this.router.navigate(['/homepage']);
    }
}
