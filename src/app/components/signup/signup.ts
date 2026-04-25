import { Component } from '@angular/core';
import { Signup } from '../../dto/signup';
import { OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { User } from '../../services/user';
import { Router } from '@angular/router'; 

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
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  register() {
    this.userService.registerNewUser(this.signupData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert('User registered successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user:', error);
        alert('Error registering user. Please try again.');
        this.router.navigate(['/home']);
      }
    )
  }
}
