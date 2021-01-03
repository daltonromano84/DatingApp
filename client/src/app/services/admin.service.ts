import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUsersWithRoles() {
    return this.http.get<Partial<User[]>>(this.baseUrl + 'admin/users-with-roles');
  }

  updateUserRoles(username: string, roles: string[]) {
    return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
  }
}
