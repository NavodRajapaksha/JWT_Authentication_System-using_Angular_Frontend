import { Component } from '@angular/core';
import { Signup } from '../../dto/signup';
import { OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from '../../services/user';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
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
