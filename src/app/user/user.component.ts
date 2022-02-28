import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input ('user-data') item: User|undefined; /* questo è di tipo User (vedi interfaces/user.ts), ma inizialmente parte come un Input con valore undefined, per evitare errori */
  @Output ('onDeleteUser') userDeleted = new EventEmitter(); /* è Output perchè deve propagarsi al parent (users.component) ed emette un Evento in ascolto */
  constructor(private userService:UserService) { }




  deleteUser() {
    this.userDeleted.emit(this.item) /* metodo emit(), perchè vogliamo emettere un evento che il parent (users.component.html) dovrà gestire */
  }




  ngOnInit(): void {
  }
}
