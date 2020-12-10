import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../Models/member';


// substituido pelo JWT Interceptor para enviar options Header na Requisição
// const httpOptions = {
//   headers: new HttpHeaders({

//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseURL + 'users');
  }

  getMember(username:string){
    return this.http.get<Member>(this.baseURL + 'users/'+ username);
  }
}
