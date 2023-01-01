import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  get userIsAuthenticated() {
    return this.authService.token;
  }

  get user() {
    return this.authService.user;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
  }
}
