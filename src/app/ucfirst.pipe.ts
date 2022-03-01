import { Pipe, PipeTransform } from "@angular/core"; /* Pipe è la classe. PipeTransform è l'interface */

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {
  transform(value: string): any { /* gli arg sono i vari pezzi della pipe e si possono settare come si vuole:   arg1: string, arg2: nummber, ecc */
      return value.split(' ') /* questo valore divide l'array in pezzi, separati da questo spazio ' ' */
      /* ora prendiamo il primo carattere di ogni parola, posizione 0, e lo mettiamo in Maiuscola, concatenandolo poi con uno spazio e con un'altra parola */
      .map((word:string) => ' ' + word.substr(0,1).toLocaleUpperCase() + word.substr(1)) /* .substr prende la prima lettera */
      .join(''); /* unisce tutti gli elementi dell'array in una stringa, così l'elenco che appare dell'array non sarà più separato dalla virgola, ma apparirà come una normale frase (è ancora un array però) */

      /* [nel, mezzo, del, cammin, di, nostra, vita] */
      /* Nel Mezzo Del Cammin Di Nostra Vita */
  }
}
