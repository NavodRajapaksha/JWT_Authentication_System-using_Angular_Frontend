import { Component } from '@angular/core';
import { Signup } from '../../dto/signup';
import { OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from '../../services/user';
import { Router, RouterLink } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: 'app-signup',
  imports: [FormsModule, NgClass, NgIf, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignupComponent implements OnInit {
  signupData : Signup = {
    username: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userRole: 'User'
  };

  constructor(
    private userService: User,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  register() {
    this.userService.registerNewUser(this.signupData).subscribe(
      (response) => {
        this.toastr.success('User registered successfully!', 'Success');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.toastr.error('Registration failed. Please try again.', 'Error');
        this.router.navigate(['/home']);
      }
    )
  }
}
