import { Injectable } from "@angular/core";
import { User } from "../classes/user";
import { UserInterface } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})

export class UserService { /* Serve, ossia ci da dei dati, anziché prenderli da un'array */
  users: Array<User> = [ /* users è di tipo Array< di tipo User, definito da interfaces/user.ts > */
    {
      id: 1,
      name: "Ciccio",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 2,
      name: "Ciccio 2isMejoChe1",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 3,
      name: "Ciccio Trinity",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 4,
      name: "Ciccio 4x4",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 5,
      name: "Ciccio Gimme5",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 6,
      name: "Ciccio 666",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
    {
      id: 7,
      name: "Ciccio 7bello",
      last_name: "Burn",
      email: "ciccio@hell.burn",
      fiscal_code: "DPDC666MLM",
      province: "Hell",
      phone: "666000",
      age: 36,
    },
  ];

  public getUsers() { /* Metodo prendi Da. ritorna un elenco di utenti dall'array. Un altro metodo migliore è prendere l'elenco da un API esterno*/
    return this.users;
  }

  public deleteUser(item: User) {
    const index = this.users.indexOf(item); /* indexOf gli passiamo un oggetto ed esso ci ritorna dove si trova quell'elemento richiesto (item). */
    /* Se indexOf non trova l'elemento, ritorna -1 */
    if (index >= 0) {
      this.users.splice(index, 1) /* metodo .splice: cerca l'elemento all'indice 1, poi lo elimina */
    }
  }

  editUser(item: User) {
    const index = this.users.findIndex((v) => v.id == item.id); /* users è l'array di utenti. .findIndex aspetta in ingresso una funzione che ritorna true o false, per il valore che cerchiamo. La funzione è un'arrow function: se l'id della funzione è uguale all'id passato per editarlo: true */
    if (index !== -1) { /* ha trovato un id */
      this.users[index] = item;
    }

  }

  addUser(item: User) {
      this.users.splice(0,0,item); /* viene aggiunto in posizione 0, non elimina un altro record, si chiamerà item */
    }


}
