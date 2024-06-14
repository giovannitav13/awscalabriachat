import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/chat']);
    }
  }
}
