import { Injectable, OnInit, inject } from '@angular/core';
import { Auth, signInWithPopup } from "@angular/fire/auth";
import {  Router } from '@angular/router';
import { GoogleAuthProvider } from "@angular/fire/auth";
import { getAuth, signOut } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private user = {}
  private auths= getAuth()
  private provider = new GoogleAuthProvider()
  
  constructor(
    private router: Router,
    private auth: Auth,
  ) { 
    this.provider.setCustomParameters({
      'hd':'contler.com'
    })
  }
 

  get userInfo(){
    return this.user
  }

  get getAuths(){
    return this.auths
  }

  async logOut(){
    return signOut(this.auths).then(()=>{
      this.user = {}
    })
  }

  login(){
    try{
       signInWithPopup(this.auth, this.provider).then(i => {
        this.user = i.user
      }).catch(error => {
        console.log(error);
      });
    }catch(error){
      console.log(error);
      return
    }
  }

}
