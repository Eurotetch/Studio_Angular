import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { UserDataComponent } from './user-data/user-data.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  /* componenti */
  declarations: [
    AppComponent,
    NavComponent,
    UserDataComponent
  ],
  /* librerie */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  /* servizi */
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
