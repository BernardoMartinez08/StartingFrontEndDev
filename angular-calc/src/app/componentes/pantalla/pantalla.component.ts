import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.scss']
})
export class PantallaComponent implements OnInit {
  private _input = "";
  @Input()
  
  set input(input: string){
    this._input = input;
  }

  get input(): string{
    return this._input;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
