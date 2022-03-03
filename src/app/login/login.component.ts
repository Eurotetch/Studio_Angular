import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../classes/user';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  logIn(form: any) {
    alert(form.valid)
    alert(form.value.email) /* value è l'oggetto del form e poi prende il valore email */
  }
}
