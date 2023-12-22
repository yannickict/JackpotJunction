import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpieleComponent } from './spiele/spiele.component';
import { KontoComponent } from './konto/konto.component';
import { LoginComponent } from './login/login.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SlotsComponent } from './slots/slots.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "Spiele", component: SpieleComponent },
  { path: "Spiele/Blackjack", component: BlackjackComponent },
  { path: "Spiele/Roulette", component: RouletteComponent },
  { path: "Spiele/Slots", component: SlotsComponent },
  { path: "Konto", component: KontoComponent },
  { path: "Login", component: LoginComponent },
  { path: "Login/Register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
