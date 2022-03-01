import { Component } from '@angular/core';
import { User } from './classes/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user_manager';

  getData(val:string) {
    console.warn(val)
  }

  showForm: boolean = false;
  userSelected: User = new User(); /* inizializza un nuovo Utente della classe User */

  editUser(item: User) {
    this.showForm = true;
    this.userSelected = item;
  }

  addUser() {
    this.userSelected = new User(); /* re-inizializza la variabile utente */
    this.showForm = false;
    this.showForm = true; /* riapre il form di modifica */
  }

}
