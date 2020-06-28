import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertsService {

  constructor() { }

  binaryToInt = (str: string): number => {
    if (!str)
      return 0

    var valor = parseInt(str, 2)
    if (isNaN(valor))
      return 0

    return valor
  }

  intToBinary = (num: number): string => {
    if (!num)
      return '--'

    if (num < 0)
      return `-${(num).toString(2).substr(1).padStart(8, "0")}`

    return (num).toString(2).padStart(8, "0")
  }
}
