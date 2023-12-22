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
    this.username = (document.getElementById("UsernameRegisterInput") as HTMLInputElement)?.value;
    this.password = (document.getElementById("PasswordRegisterInput") as HTMLInputElement)?.value;

    // Prepare the data
    const formData = {
      username: 'hans',
      password: 'password'
    };

    // Make an HTTP POST request to your PHP file
    this.http.post('http://localhost/blj/Jackpot-JunctionPhP/model/register.model.php', formData)
      .subscribe({
        next: (response: any) => {
          console.log('Response object:', response);

          if (response.status === 'success') {
            // Handle success (e.g., redirect, show success message)
            console.log('Data received successfully');
          } else if (response.status === 'error') {
            // Handle error (e.g., display error message)
            console.error('Error:', response.message);
          }
        },
        error: (error) => {
          console.error('HTTP Error:', error);
        }
      });
  }
}