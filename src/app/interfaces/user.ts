export interface UserInterface {
    id: number;
    name: string;
    last_name: string;
    email: string;
    fiscal_code: string;
    province: string;
    phone: string;
    age: number;
  }
/* tutto questo è la definizione di come è composto un User, ossia in questo caso un array di stringhe e numeri */
/* adesso il tipo User si sostituirà al tipo any laddove vogliamo che sia trattato come questa lista di nome, cognome, ecc */
