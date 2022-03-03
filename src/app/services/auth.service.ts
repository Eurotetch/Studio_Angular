import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = true; /* è fittizio in quanto non c'è un database */

  constructor() { }

  isUserLoggedIn() {
    /* logica se l'utente è davvero loggato, quando si ha un database */
    return this.isUserLogged;
  }

  signIn(email: String, password: string) {

  }

  signUp(username: string, email: String, password: string) {

  }

  logout() {
    this.isUserLogged = false; /* termina il log, poi verrà implementato facendolo tornare alla home */
  }
}
