import { Component } from '@angular/core';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrl: './konto.component.css'
})
export class KontoComponent {
  submitForm(event: Event): void {
    event.preventDefault();
    alert("asd");
  }
}
