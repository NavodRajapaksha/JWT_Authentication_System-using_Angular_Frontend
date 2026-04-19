import { Inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuth } from '../../services/user-auth';

@Injectable({
  providedIn: 'root'
})

export const authGuard: CanActivateFn = (route, state) => {

  constructor(
    private userauth : UserAuth
  ){}


  return true;
};
