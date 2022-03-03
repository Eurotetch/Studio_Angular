import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public title = 'User Detail'
  item : User | undefined;
  User: User | undefined;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { } /* rappresenta la rotta che è stata attivata */

  backToUsers() {
    this.router.navigate(['users']);
  }

  ngOnInit(): void {
    this.item = new User(); /* all'inizializzazione del Componente crea un nuovo utente (fittizio, solo per vedere) */

    this.route.params.subscribe ( /* i parametri di questo componente li prende e li sottoscrive da: userService, prendendo in considerazione l'utente con l'id scelto */
      (p) => {
        this.User = this.userService.getUser(+p['id']);
      }
    )

  }
}
