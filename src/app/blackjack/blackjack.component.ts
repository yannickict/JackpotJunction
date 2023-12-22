import { Component } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})
export class BlackjackComponent {
  BetChip(amount: string){
    alert(amount)
  }
}
