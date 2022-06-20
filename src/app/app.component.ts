import { Component } from '@angular/core';
import {convert, bases, valideInput} from '../models/convert'
import { NgxToastService } from 'ngx-toast-notifier';

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

  constructor(private ngxToastService: NgxToastService) {}

  checkIncorrectNumber(input:string): boolean {
    return valideInput(input,this.base);
  }

  sendToConvert = (event:string) =>{
    this.input = event
    if(this.input == ''){
      this.addWarning()
      this.number = ''
      this.result = ''
    }
    if(this.checkIncorrectNumber(this.input.toUpperCase())){
      this.number =convert(this.input.toUpperCase(),this.base, this.baseConvert)
      this.result = `${this.input}(${this.base}) equivale a ${this.number}(${this.baseConvert}) `
    }else{
      this.addDanger(`El numero ${this.input} no esta en base ${this.base}`)
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

  addWarning():void{
    this.ngxToastService.onWarning('Advertencia','No ingresaste un numero a convertir')
  }

  addDanger(danger:string):void{
    this.ngxToastService.onDanger('Error',danger)
  }

}
