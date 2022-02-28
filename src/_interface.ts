/* porzione di codice che dovrà essere riscritto ogni volta se necessario */
  function showUser (user: {lastname:string, firstname: string}) {
    console.log(user.firstname +' ,' + user.lastname)
  }
  showUser({lastname:'Burn', firstname:'Ciccio'})



/* Interface. Costrutto Facile da riutilizzare richiamandolo col nome dato dopo interface (convenzione: I poi nome) */
  interface IUser {
    lastname: string,
    firstname: string,
    address?: string, /* questo dato è opzionale come input, quindi se non verrà indicato sarà bypassato */
    [propName: string]: any /* questa dichiarazione è aperta ad altri input non dichiarati, che se vengono inseriti verranno trattati come tipo any, in base a ciò che sono */
  }

  function showUser2 (user: IUser) { /* IUSer prenderà gli input lastname e firstname */
    console.log(user.firstname +' ,' + user.lastname)
  }
  showUser2({lastname:'Burn', firstname:'Ciccio'})




