import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  visualizarAdm=localStorage.getItem('admin');
  visualizarUs=localStorage.getItem('user');

  logout() {
    localStorage.removeItem('acceso');
    localStorage.removeItem('admin');
    localStorage.removeItem('user'); 
    localStorage.removeItem('visitante'); 
    localStorage.removeItem('token'); 
    window.location.href='/login' 
  }
}
