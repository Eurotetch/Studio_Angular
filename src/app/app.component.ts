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
    this.userSelected = item;
    this.showForm = true;
  }

}
