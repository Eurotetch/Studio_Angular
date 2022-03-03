import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user (figlio)/user.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users (padre)/users.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from "./services/user.service";
import { UserDataComponent } from './user-data/user-data.component';

export const routes: Routes = [ /* è un'Array di oggetti, ognuno dei quali specifica un path diverso */
  {
    path: 'users', /* il nome del percorso (https://sito/users) */
    pathMatch: 'full', /* se deve rispettare tutti i caratteri inseriti per essere riconosciuta */
    component: UsersComponent, /* qual'è il componente di riferimento */
  },
  {
    path: '', /* una rotta vuota o non inserita */
    pathMatch: 'full',
    redirectTo: 'users', /* redirige alla pagina inserita (o di default alla prima rotta inserita) se non trova l'indirizzo */
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'users/:id/edit', /* :id è un placeholder che cattura qualsiasi cosa ci sia tra users/ ed /edit. In questo caso l'id dell'utente */
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [ /* dichiara la lista esatta di come vengono presi i componenti da redirigere */
    UsersComponent, UserComponent, UserDetailComponent, PipesComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
