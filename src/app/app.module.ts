import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { Router, RouterModule } from '@angular/router';
//import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [AppComponent, NgModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MainLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
