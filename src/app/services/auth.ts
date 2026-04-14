import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private http:HttpClient){}

 login(username: string, password: string) {
    return this.http.post(
      'https://dummyjson.com/auth/login',
      {
        username: username,
        password: password
      }
    );
  }

 saveUser(user:any){
   localStorage.setItem('user',JSON.stringify(user));
 }

 isLoggedIn(){
   return !!localStorage.getItem('user');
 }

 logout(){
   localStorage.removeItem('user');
 }

 getUser(){
   return JSON.parse(localStorage.getItem('user') || '{}');
 }
}
