import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from '../../services/menu';
import { RouterLink } from "@angular/router";
import { UserAuth } from '../../services/user-auth';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../services/user';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
    private menu: Menu,
    private userAuth: UserAuth,
    private router: Router,
    public user: User
  ) {
  }

  toggleMenu() {
    this.menu.toggle();
  }

  public isLoggedIn() {
    return this.userAuth.isLoggedIn();
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  } 
}
