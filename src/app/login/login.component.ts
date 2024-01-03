import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected property name to 'styleUrls'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  submitForm(event: Event): void {
    event.preventDefault();

    const usernameInput = document.getElementById(
      'UsernameInput'
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      'PasswordInput'
    ) as HTMLInputElement;
    const successMessageBox = document.getElementById(
      'SuccessMessageBox'
    ) as HTMLInputElement;
    const errorMessageBox = document.getElementById(
      'ErrorMessageBox'
    ) as HTMLInputElement;

    if (usernameInput && passwordInput) {
      this.username = usernameInput.value;
      this.password = passwordInput.value;
    } else {
      console.error('Username or password input element not found');
    }
    const formData = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post(
        'http://localhost/blj/Jackpot-JunctionPhP/model/Login.model.php',
        formData
      )
      .subscribe({
        next: (response: any) => {
          console.log('Response object:', response);
          if (response.status === 'success') {
            usernameInput.value = '';
            passwordInput.value = '';
            successMessageBox?.classList.remove('hidden');
            errorMessageBox?.classList.add('hidden');
            //i want to add response.id to a cookie
            console.log(response.message);
          } else if (response.status === 'error') {
            errorMessageBox!.innerText = 'Error: ' + response.message;
            errorMessageBox?.classList.remove('hidden');
            successMessageBox?.classList.add('hidden');
            console.error('Error:', response.message);
          }
        },
        error: (error) => {
          console.error('HTTP Error:', error);
        },
      });
  }
}
