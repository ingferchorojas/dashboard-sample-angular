import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  getUsername(): string {
    const userData = JSON.parse(localStorage.getItem('user_authenticated') || '{}');
    return userData.name || 'Invitado';
  }
}
