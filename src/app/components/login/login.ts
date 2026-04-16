import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { User } from '../../services/user';
import { UserAuth } from '../../services/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
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
    // console.log(loginForm.value);
    // console.log("Login successful");

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

}
