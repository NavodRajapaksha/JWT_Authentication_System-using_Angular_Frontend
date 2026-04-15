import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  constructor(private userService: User) { }

  ngOnInit(): void {
  }

  login( loginForm: NgForm) {
    console.log(loginForm.value);
    console.log("Login successful");

    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log("Login successful", response);
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }

}
