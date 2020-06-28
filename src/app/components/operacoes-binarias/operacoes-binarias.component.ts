import { Component, OnInit } from '@angular/core';
import { ConvertsService } from 'src/app/services/converts.service';

@Component({
  selector: 'app-operacoes-binarias',
  templateUrl: './operacoes-binarias.component.html',
  styleUrls: ['./operacoes-binarias.component.scss']
})
export class OperacoesBinariasComponent implements OnInit {

  msgErroBinarioA: string = "Preencha este campo."
  msgErroBinarioB: string = "Preencha este campo."

  binarioA: string
  binarioB: string
  resultadoString: string
  resultadoBinario: string
  operador: string


  constructor(
    public conversor: ConvertsService
  ) { }

  public mask0e1 = { '0': { pattern: new RegExp('\[0-1\]') } };

  ngOnInit(): void {
  }

  limparCalc = () => {
    this.binarioA = ""
    this.binarioB = ""
    this.resultadoString = ""
    this.resultadoBinario = ""
    this.operador = ""
  }

  calcular = (operador: string) => {
    this.operador = operador;
    if (!this.camposPreenchidos())
      return

    let result;
    if (operador === "+")
      result = this.conversor.intToBinary((this.conversor.binaryToInt(this.binarioA) + this.conversor.binaryToInt(this.binarioB)))
    if (operador === "-")
      result = this.conversor.intToBinary((this.conversor.binaryToInt(this.binarioA) - this.conversor.binaryToInt(this.binarioB)))
    if (operador === "*")
      result = this.conversor.intToBinary((this.conversor.binaryToInt(this.binarioA) * this.conversor.binaryToInt(this.binarioB)))
    if (operador === "/")
      result = this.conversor.intToBinary((this.conversor.binaryToInt(this.binarioA) / this.conversor.binaryToInt(this.binarioB)))
    if (operador === "%")
      result = this.conversor.intToBinary((this.conversor.binaryToInt(this.binarioA) % this.conversor.binaryToInt(this.binarioB)))

    this.resultadoBinario = result;

  }

  validarBinarioA = (binario: string): boolean => {

    if (!binario || binario.length !== 8)
      return false

    if (!this.binarioValido(binario)) {
      this.msgErroBinarioA = "Informe um número binário válido."
      return false
    }

    return true
  }

  validarBinarioB = (binario: string): boolean => {
    if (!binario || binario.length !== 8)
      return false

    if (!this.binarioValido(binario)) {
      this.msgErroBinarioB = "Informe um número binário válido."
      return false
    }

    return true
  }


  camposPreenchidos() {
    if (this.validarBinarioA(this.binarioA) && this.validarBinarioB(this.binarioB))
      return true

    return false
  }

  binarioValido = (binario: string): boolean => {
    var seValido = true;

    var strList = binario.split('')

    strList.map(char => {
      if (char !== "0" && char !== "1")
        seValido = false
    })

    return seValido;
  }

}
