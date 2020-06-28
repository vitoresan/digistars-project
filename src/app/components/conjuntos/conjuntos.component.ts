import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.scss']
})
export class ConjuntosComponent implements OnInit {

  msgErroConjuntoN: string;
  msgErroConjuntoK: string;
  inputConjuntoN: string;
  inputConjuntoK: string;
  conjuntoN: number
  conjuntoK: number[] = []
  conjuncaoSaida: number[] = []
  conjuncaoEntrada: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  gerarConjuntoSaida = () => {
    if (!this.conjuntoNValido()) {
      return
    }

    if ((this.conjuntoK.length + 1) < this.conjuntoN) {
      return
    }

    this.conjuncaoSaida = []
    Array
      .from(this.conjuntoK)
      .sort((a, b) => a - b)
      .filter(this.distinct)
      .map(x => {
        this.conjuncaoSaida.push(x)
      })

  }

  limparConjuntos = () => {
    this.inputConjuntoN = "";
    this.inputConjuntoK = "";
    this.conjuntoN = null
    this.conjuntoK = []
    this.conjuncaoSaida = []
    this.conjuncaoEntrada = []
  }

  addConjuntoN = () => {
    if (this.conjuntoNValido()) {
      this.conjuntoN = parseInt(this.inputConjuntoN)
      this.inputConjuntoN = null
    }
  }

  conjuntoNValido() {
    if (this.conjuntoN)
      return true

    if (!this.inputConjuntoN) {
      this.msgErroConjuntoN = "Preencha este campo!"
      return false
    }

    let valor = parseInt(this.inputConjuntoN)

    if (valor < 1 || valor > 1000) {
      this.msgErroConjuntoN = "Informe um numero entre 1 e 1000!"
      return false
    }

    return true
  }

  addConjuntoK = () => {
    if (this.conjuntoKValido()) {
      this.conjuntoK.push(parseInt(this.inputConjuntoK))
      this.popularConjuncaoEntrada()
      this.inputConjuntoK = null
    }
  }

  conjuntoKValido() {
    if (!this.conjuntoN) {
      {
        this.msgErroConjuntoK = "Preencha o conjunto N!"
        return false
      }
    } else if (!this.inputConjuntoK) {
      this.msgErroConjuntoK = "Preencha este campo!"
      return false
    }

    if ((this.conjuntoK.length + 1) > this.conjuntoN) {
      this.msgErroConjuntoK = `Já atingiu ${this.conjuntoN} números!`
      return false
    }

    let valor = parseInt(this.inputConjuntoK)

    if (valor < -1000 || valor > 1000) {
      this.msgErroConjuntoK = "Informe um numero entre -1000 e 1000!"
      return false
    }

    return true
  }

  popularConjuncaoEntrada = () => {
    if (!this.conjuntoN || !this.conjuntoK || this.conjuntoK.length === 0)
      return

    this.conjuncaoEntrada = []
    this.conjuncaoEntrada.push(this.conjuntoN)

    this
      .conjuntoK
      .map(x => {
        this.conjuncaoEntrada.push(x)
      })
  }

  retornarRowsTextArea = () => {
    if (!this.conjuntoN)
      return 3

    return this.conjuntoN + 3
  }

  distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }
}
