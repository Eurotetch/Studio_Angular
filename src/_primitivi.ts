/* ---------------------------------------------------------------- */
/* booleano */
  let bool: boolean
  bool = false



/* ---------------------------------------------------------------- */
/* numero */
  let num = 5
  num = num+1



/* ---------------------------------------------------------------- */
/* stringa */
  let string = "ciao"
  string = string + "a tutti"



/* ---------------------------------------------------------------- */
/* array */
  let arrBool: boolean[] = [true,false,false,false,true]
  let arrNum: number[] = [1,2,3,4,5]
  let arrStr: string[] = ["questo","quello"]
  /* altro metodo per dichiarare un tipo di array: let arrVariante: Array<string> = ["stringa1","stringa2"] */



/* ---------------------------------------------------------------- */
/* Tupla: quando abbiamo un array di dati i cui tipi sono conosciuti e non cambiano */
  let tupla:[string, number]
  tupla = ["parola", 45]
  //tupla = [45, "parola"]  /* così è errato, perchè la dichiarazione era diversa: il primo è string e il secondo number*/



/* ---------------------------------------------------------------- */
/* Enum: quando vogliamo dare a dei nomi parlanti. Per convenzione si usa tutto MAIUSCOLO */
  enum WEEKEND {
    FRI,
    SAT,
    SUN,
  }
  /* in javascript verrà quindi tradotto così da typescript:
  var WEEKEND;
  (function (WEEKEND) {
    WEEKEND[WEEKEND["FRI"] = 0] = "FRI";
    WEEKEND[WEEKEND["FRI"] = 1] = "SAT";
    WEEKEND[WEEKEND["FRI"] = 2] = "SUN";
  }) (WEEKEND || (WEEKEND = {})); */

  /* Viene quindi creato un array con chiave "0" e valore "FRI" e così via */
  /* Se vogliamo cambiare il valore alla chiave da "1" anzichè "0": */
  enum DAYS {
    MON = 1, /* basta solo il primo per far partire il conteggio da questo numero */
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
  }
  /* Oppure cambiare valori preimpostati e non compilati in automatico: */
  enum SPESA {
    SALATINI = 3,
    FORMAGGIO = 1,
    AFFETTATI = 4,
    LATTE = 2,
    CEREALI = 1
  }

  /* per conoscere i dati della chiave o del valore: */
  console.log(WEEKEND.FRI) /* chiave. Si vedrà 0 o 1 dipende se abbiamo deciso da cosa partisse*/
  console.log(WEEKEND[0]) /* valore. Si vedrà FRI perchè è alla posizione indice 0 */

  /* se voglio modificare WEEKEND ma non voglio sovrascriverlo, dovrò iniziare con una chiave più avanti dell'ultima: */
  enum WEEKEND {
    OTTAVO = 8,
    NONO = 9
  }



/* ---------------------------------------------------------------- */
/* oggetto */
  var obj = {address: "Terni"}



/* ---------------------------------------------------------------- */
/* any: dati misti di qualsiasi tipo */
  let arrAny: any[] = ["cose","da","matti",5,1,4,true,10,{address: "Terni"}]



/* ---------------------------------------------------------------- */
/* undefined */
  let CosaSono; /* non dando valori, resta indefinito. Non che non lo abbia, ma attualmente è undefined */



/* ---------------------------------------------------------------- */
/* null */
  let nulla = null; /* niente, non è un dato */



/* ---------------------------------------------------------------- */
/* void: Non ritorna alcun dato*/
  function nonStampareNiente(): void {
    //return 15; /* è sbagliato perchè qualsiasi cosa ritorni non deve essere un dato */
  }

  let universo1: void = undefined /* si può assegnare, perchè il dato non è definito, quindi è "vuoto" */
  //let universo2: void = null /* si potrebbe, perchè anche quì il null non è un dato reale, ma nelle impostazioni di Typescript di default non è assegnabile */



/* ---------------------------------------------------------------- */
/* never: non ritorna mai niente */
  function Mai(): never {
    throw new Error('nessun valore definito')
  }
  Mai()
