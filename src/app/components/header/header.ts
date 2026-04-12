import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private menu: Menu) {
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
