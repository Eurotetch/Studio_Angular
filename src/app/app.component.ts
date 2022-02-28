import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user_manager';
  userSelected: User | undefined
  editUser(item: any) {
    this.userSelected = item;
  }
}
