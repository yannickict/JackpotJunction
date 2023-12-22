import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitForm(event: Event): void {
    event.preventDefault();
    alert("asd");
  }
}
