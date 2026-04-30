import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from '../../services/menu';
import { RouterLink } from "@angular/router";
import { UserAuth } from '../../services/user-auth';
import { NgIf } from '@angular/common';
import { User } from '../../services/user';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf,
],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isHomePage = false;


  constructor(
    private menu: Menu,
    private userAuth: UserAuth,
    private router: Router,
    public user: User
  ) {
  
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/home' || event.url === '/login' || event.url === '/signup';
    });
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
