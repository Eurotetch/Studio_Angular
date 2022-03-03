import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showForm: boolean = false;
  userSelected: User = new User(); /* inizializza un nuovo Utente della classe User */

  constructor() { }


  addUser() {
    this.userSelected = new User(); /* re-inizializza la variabile utente */
    this.showForm = false;
    this.showForm = true; /* riapre il form di modifica */
  }

  ngOnInit(): void {
  }

}
