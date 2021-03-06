import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { faInfo, faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input ('user-data') item: User | undefined; /* | è un Pipe, Uniontype, come un "or" di tipo */
  /* questo è di tipo User (vedi interfaces/user.ts), ma inizialmente parte come un Input con valore undefined, per evitare errori */
  @Output ('onDeleteUser') onDeleteUser = new EventEmitter(); /* è Output perchè deve propagarsi al padre (users.component) ed emette un Evento in ascolto */
  @Output ('onSelectUser') onSelectUser = new EventEmitter();
  faInfo = faInfo;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  constructor(private userService:UserService, private route: Router) { } /* con route: Router ora possiamo navigare  */



  editUser() {
    this.route.navigate(['users' + this.item?.id , 'edit']); /* metodo navigate può ricevere un array di parametri */
    /* altro metodo: this.route.navigateByUrl('/users' + this.item?.id + '/edit'); */
    this.onSelectUser.emit(this.item) /* metodo emit(), perchè vogliamo emettere un evento che il parent (users.component.html) dovrà gestire */
  }


  deleteUser() {
    this.onDeleteUser.emit(this.item) /* metodo emit(), perchè vogliamo emettere un evento che il parent (users.component.html) dovrà gestire */
  }

  showUserDetail() {
    this.route.navigate(['users' , this.item?.id])
  }



  ngOnInit(): void {
  }
}
