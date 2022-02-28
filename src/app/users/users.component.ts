import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-users", /* seleziona un elemento tag tr che abbia un attributo "app-user" */
  /* usando invece: "selector: "app-users"" verrebbe creato un elemento nuovo "app-user" */
  templateUrl: "users.component.html",
  styleUrls: ["users.component.css"]
})
  export class UsersComponent implements OnInit { /* OnInit è  */
    title = "List of Users"
    public users:any[] = [];
    @Input ('user-data') item:any; /* Decoratore @Input riceve una variabile item. Il suo alias è 'user-data' per richiamarla anche fuori come variabile pubblica. In futuro se cambiassimo la variabile user in altri nomi, tipo item, non cambierebbe niente al di fuori di quì */

    /* Questo costruttore si occuperà di inizializzare il servizio, ma non costruirà niente finchè non verrà chiamato GetUsers() */
    constructor(private service: UserService) { /* Injection di Angular del servizio UserService. service è di tipo UserService. */
    }

    /* Serve però un provider che fornisce ad Angular come creare questa istanza ed iniettarla nel costruttore. */

    /* 3 MODI PER INIETTARE IL SERVIZIO con il provider: */
    /* SOLO NEL COMPONENTE:
        vedi: "user.service.ts", all'inizio bisogna definire il servizio UserService come @Injectable. Manca ancora il provider da dove trovare il servizio
        Solo nel componente Users: vedi: "users.component.ts, @Component ...", providers: [UserService]
        Così ha il suo provider, MA ogni volta che viene usare il componente Users verrà creata un'istanza sempre diversa. */
    /* NEL MODULO APP.MODULE O IN ALTRO ADATTO:
        Se vogliamo avere un solo un'istanza, allora questo servizio deve andare a livello di MODULO, generale, o un modulo per ogni parte dell'app a parte
        vedi: TOGLI providers: ... da "users.component.ts" e METTILO in "app.module.ts", providers:[UserService] , o in qualunque altro modulo
    /* NELL'APP GLOBALMENTE COME ROOT:
        vedi: "user.service.ts", @Injectable, ... providedIn:'root'. Così crea un'istanza GLOBALE per tutta l'app. Root è sempre infatti la radice che comprende tutto
        Questo in alternativa Angular lo fa di DEFAULT quando si crea un servizio da terminale: "ng g service nome", dove g sta per GLOBALE */

      /*
        this.users = UserService.getUsers();
      questa riga funziona comunque, ma è più corretto inserirla quando Angular inizializza il progetto, quì sotto in ngOnInit() */



      ngOnInit() { /* ossia quando viene inizializzato il componente */
        this.users = this.service.getUsers(); /* Quì Angular crea in automatico una variabile "private" e Inietterà questa dipendency */

      }

      deleteUser(user:any) {
        alert(user.lastname)
      }
  }
