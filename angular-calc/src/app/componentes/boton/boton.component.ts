import { Component, OnInit, ContentChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  host: {'class': 'boton'}
})
export class BotonComponent implements OnInit {
  @ContentChild('c') elem!: ElementRef;
  public _valor = "";

  esOperador = () => {
    const operadores = ["+", "-", "*", "/", "="];
    return operadores.includes(this._valor);
  };

  ngAfterContentInit(): void {
    this._valor = this.elem.nativeElement.innerHTML;
  }

  @Output() manejarClic = new EventEmitter<string>();

  manejarClicComponente(dato: string){
    this.manejarClic.emit(dato);
  }

  ngOnInit(): void {

  }

}
