import { Component } from '@angular/core';
import {convert, bases, valideInput} from '../models/convert'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CONVERSOR NUMERICO';

  number = ''
  result = ''
  input = ''
  base = 2
  baseConvert = 2


  bases = bases()


  checkIncorrectNumber(): boolean {
    return valideInput(this.input,this.base);
  }

  sendToConvert = (event:string) =>{
    this.input = event
    if(this.input == ''){
      alert(`No ingresaste un numero a convertir`)
      this.number = ''
      this.result = ''
    }
    if(this.checkIncorrectNumber()){
      this.number =convert(this.input.toUpperCase(),this.base, this.baseConvert)
      this.result = `${this.input}(${this.base}) equivale a ${this.number}(${this.baseConvert}) `
    }else{
      alert(`El numero ${this.input} no esta en base ${this.base}`)
      this.number = ''
      this.result = ''
    }

  }

  changeBase(event:Event){
    let base = event.target as HTMLOptionElement
    this.base = Number(base.value)
    this.sendToConvert(this.input)
  }

  changeBaseConvert(event:Event){
    let base = event.target as HTMLOptionElement
    this.baseConvert = Number(base.value)
    this.sendToConvert(this.input)
  }

  clear(){
    this.input = ''
    this.base = 2
    this.baseConvert= 2
    this.number= ''
    this.result= ''
  }


}
