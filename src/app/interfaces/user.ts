export interface UserInterface {
    id: number;
    name: string;
    last_name: string;
    email: string;
    fiscal_code: string;
    phone: string;
    province: string;
    age: number;
  }
/* tutto questo √® la definizione di come √® composto un User, ossia in questo caso un array di stringhe e numeri */
/* adesso il tipo User si sostituir√† al tipo any laddove vogliamo che sia trattato come questa lista di nome, cognome, ecc */
