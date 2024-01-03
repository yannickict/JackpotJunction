import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  submitForm(event: Event): void {
    event.preventDefault();

    // Retrieve values from input fields
    const usernameInput = document.getElementById("UsernameRegisterInput") as HTMLInputElement;
    const passwordInput = document.getElementById("PasswordRegisterInput") as HTMLInputElement;
    const successMessageBox = document.getElementById("SuccessMessageBox") as HTMLInputElement;
    const errorMessageBox = document.getElementById("ErrorMessageBox") as HTMLInputElement;

  // Checking if the elements exist before accessing their values
  if (usernameInput && passwordInput) {
    this.username = usernameInput.value;
    this.password = passwordInput.value;
  } else {
    console.error("Username or password input element not found");
  }
    // Prepare the data
    const formData = {
      username: this.username,
      password: this.password
    };

    // Make an HTTP POST request to your PHP file
    this.http.post('http://localhost/blj/Jackpot-JunctionPhP/model/register.model.php', formData)
      .subscribe({
        next: (response: any) => {
          console.log('Response object:', response);

          if (response.status === 'success') {
            usernameInput!.value = "";
            passwordInput!.value = "";
            successMessageBox?.classList.remove("hidden");
            errorMessageBox?.classList.add("hidden");
            console.log('Data received successfully');
          } else if (response.status === 'error') {
            errorMessageBox!.innerText = "Error: " + response.message;
            errorMessageBox?.classList.remove("hidden");
            successMessageBox?.classList.add("hidden");
            console.error('Error:', response.message);
          }
        },
        error: (error) => {
          console.error('HTTP Error:', error);
        }
      });
  }
}