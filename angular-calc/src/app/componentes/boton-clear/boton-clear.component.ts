import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-clear',
  templateUrl: './boton-clear.component.html',
  styleUrls: ['./boton-clear.component.scss'],
  host: {'class': 'boton'}
})
export class BotonClearComponent implements OnInit {
  @Output() manejarClear = new EventEmitter<string>();
  
  manejarClicComponente(){
    this.manejarClear.emit('');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
