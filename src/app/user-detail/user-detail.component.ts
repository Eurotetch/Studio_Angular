import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../classes/user';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy!: User;
  private _item: User;
  copyUser!: User;

  @Input() set item(item: User) { /* setter e getter. Qui si setta la funzione che riceve un utente di tipo User */
    /* cosa fa questo setter ? */
    this._item = item;
    this.userCopy = Object.assign({}, item); /* crea una copia dell'utente così da modificare questa e non l'originale */
    }
  get item() { /* setter e getter. Quì ritorniamo l'utente copiato */
    return this._item;
    }

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { /* sono servizi e non va dichiarata nessuna variabile, ma va comunque Iniettato, usando private ed il suo nome */
      this.item = new User();
      this._item = new User();
      this.userCopy = new User();
    }

  ngOnInit() : void {
    this.item = new User();
    this.route.params.subscribe(params => {
      if (!params['id']) {
        return;
      }

      const test = this.userService.getUser(+params['id']);
      if (test) {this.item = test}
    });

  }

  backToUsers() {
    this.router.navigate(['users']);
  }

  saveUser() {
    if (this.item.id > 0) { /* se il form ha un campo con un id almeno di 0 (partenza array), significa che sta Modificando un utente esistente */
      this.userService.editUser(this.item);
      this.router.navigate(['users']);
    } else { /* altrimenti significa che si è premuto Add New User e non il pulsante Edit */
      this.userService.addUser(this.item);
      this.item = new User();
      this.router.navigate(['users']);
    }
  }

  resetForm(form: FormGroup) { /* form è di tipo FormGroup, non può essere Any */
    if (this.item.id > 0) { /* se il form ha un campo con un id almeno di 0 (partenza array), significa che sta Modificando un utente esistente */
      this.item = this.copyUser;
      alert('Non è possibile resettare i campi di un Utente già registrare')
    } else { /* altrimenti significa che si è premuto Add New User e non il pulsante Edit */
      this.item = new User();
    }
  }


}
