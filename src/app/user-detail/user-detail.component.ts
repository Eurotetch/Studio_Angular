import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../classes/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy!: User;
  private _item!: User;
  copyUser!: User;

  @Input() set item(item: User) { /* setter e getter. Qui si setta la funzione che riceve un utente di tipo User */
    /* cosa fa questo setter ? */
    this._item = item;
    this.userCopy = Object.assign({}, item); /* crea una copia dell'utente così da modificare questa e non l'originale */
    }
  get item() { /* setter e getter. Quì ritorniamo l'utente copiato */
    return this._item;
    }

    constructor(private userService: UserService) { /* è un servizio e non va dichiarata nessuna variabile, ma va comunque Iniettato, usando private ed il suo nome */
  }

  ngOnInit(): void {
  }

  saveUser() {
    if (this.item.id > 0) {
      this.userService.editUser(this.item);
    } else {
      this.userService.addUser(this.item)
    }
  }

  resetForm(form: FormGroup) { /* form è di tipo FormGroup, non può essere Any */
    if (this.item.id === 0) {
      this.item = new User();
    } else {
      this.item = this.copyUser;
    }
  }


}
