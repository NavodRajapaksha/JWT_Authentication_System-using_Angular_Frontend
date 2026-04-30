import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface UserRow {
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

@Component({
  selector: 'app-admin',
  imports: [NgFor, NgClass],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  users: UserRow[] = [
    {
      name: 'Julian Thorne',
      email: 'j.thorne@editorial.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/34?img=11'
    },
    {
      name: 'Elena Vance',
      email: 'vance.e@editorial.com',
      role: 'Editor',
      status: 'Active',
      avatar: 'https://i.pravatar.cc/34?img=5'
    },
    {
      name: 'Marcus Wright',
      email: 'm.wright@editorial.com',
      role: 'Viewer',
      status: 'Offline',
      avatar: 'https://i.pravatar.cc/34?img=12'
    },
    {
      name: 'Sara Jenkins',
      email: 'sara.j@editorial.com',
      role: 'Editor',
      status: 'Blocked',
      avatar: 'https://i.pravatar.cc/34?img=9'
    },
  ];
}