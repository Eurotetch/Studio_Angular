import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  title = 'pipes';
  todayDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
