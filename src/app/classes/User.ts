import { UserInterface } from "../interfaces/user";
/* questa classe servirà ad inizializzare un nuovo utente.
Prende l'interfaccia di interfaces/user.ts */

export class User implements UserInterface {
  id: number;
  name: string;
  last_name: string;
  email: string;
  fiscal_code: string;
  province: string;
  phone: string;
  age: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.last_name = '';
    this.email = '';
    this.fiscal_code = '';
    this.province = '';
    this.phone = '';
    this.age = 18;
  }
}
