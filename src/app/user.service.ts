import { Injectable } from "@angular/core";

@Injectable()
export class UserService { /* Serve, ossia ci da dei dati, anziché prenderli da un'array */
  static getUsers() { /* Metodo prendi Da. ritorna un elenco di utenti dall'array. Un altro metodo migliore è prendere l'elenco da un API esterno*/
    return [
      {
        name: "Ciccio",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio 2isMejoChe1",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio Trinity",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio 4x4",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio Gimme5",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio 666",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
      {
        name: "Ciccio 7bello",
        last_name: "Burn",
        email: "ciccio@helloutofhere.burn",
        fiscal_code: "DPDC666MLM",
        province: "Hell",
        phone: "666000",
        age: "36",
      },
    ]
  }
}
