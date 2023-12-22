import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpieleComponent } from './spiele/spiele.component';
import { KontoComponent } from './konto/konto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpieleComponent,
    KontoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
