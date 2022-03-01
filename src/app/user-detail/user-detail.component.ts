import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  item!: User;
  constructor() { }

  saveUser() {
    alert(this.item.id)
  }

  ngOnInit(): void {
  }

}
