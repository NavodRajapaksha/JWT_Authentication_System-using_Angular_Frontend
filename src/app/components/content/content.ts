import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Menu } from '../../services/menu';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { MatIcon, MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-content',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatIconModule
],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  opened = true;

  constructor(private menu : Menu) {
    this.menu.isOpen.subscribe(data => {
      this.opened = data;
    })
  }
}
