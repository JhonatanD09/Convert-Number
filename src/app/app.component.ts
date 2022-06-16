import { Component } from '@angular/core';
import {convert, bases} from '../models/convert'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convert-number';

  number = ''
  input = ''
  base = 2
  baseConvert = 2

  bases = bases()

  sendToConvert = (event:string) =>{
    this.input = event
    this.number =convert(this.input.toUpperCase(),this.base, this.baseConvert)
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
    this.base = 0
    this.baseConvert= 0
    this.number= ''
  }


}
