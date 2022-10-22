import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'angular-calc';
  input: string = "";

  setInput(dato: string){
    this.input += dato;
  }

  calcular(){
    if(this.input)
      this.input = evaluate(this.input);
  }
}
