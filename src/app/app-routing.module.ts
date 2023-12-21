import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpieleComponent } from './spiele/spiele.component';
import { KontoComponent } from './konto/konto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "Spiele", component: SpieleComponent},
  { path: "Konto", component: KontoComponent},
  { path: "Login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
