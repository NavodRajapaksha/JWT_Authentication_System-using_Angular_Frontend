import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from '../../services/user';
import { UserAuth } from '../../services/user-auth';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  constructor(
    private userService: User,
    private UserAuth:UserAuth,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  login( loginForm: NgForm) {
    
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {

        this.UserAuth.setRoles(response.userEntity.roleEntitySet);
        this.UserAuth.setToken(response.jwtToken);

        const role =  response.userEntity.roleEntitySet[0].roleName;
        if(role === 'Admin') {
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }

  showPassword: boolean = false;

  togglePwd() {
    this.showPassword = !this.showPassword;
  }

}
