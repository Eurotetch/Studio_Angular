import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showForm: boolean = false;
  userSelected: User = new User(); /* inizializza un nuovo Utente della classe User */

  @Output() onNewUser = new EventEmitter()
  public isUserLoggedIn = true;

  constructor(private auth: AuthService, private router: Router) { }


  addUser() {
    this.userSelected = new User(); /* re-inizializza la variabile utente */
    this.showForm = false;
    this.showForm = true; /* riapre il form di modifica */
  }

  logout(event: any) {
    event.preventDefault(); /* previene un href di default */
    this.auth.logout();
    this.isUserLoggedIn = false;
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn() /* questa variabile può essere usata nell'html per condizionare Login e Logout a funzionare in base alla situazione dell'utente collegato */
  }

}
