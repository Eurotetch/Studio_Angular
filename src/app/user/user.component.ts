import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input ('user-data') item:any;
  constructor() { }


  ngOnInit(): void {
  }

  deleteUser() {
    alert(this.item.last_name)
  }

}
