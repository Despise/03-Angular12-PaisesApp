import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit {

  @Input() ph: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer$: Subject<string> = new Subject();
  public termino: string= '';;

  constructor() { }

  ngOnInit(): void {
    this.debouncer$
      .pipe(debounceTime( 300 ))  
      .subscribe( v => {
        this.onDebounce.emit( v );
      })
  }

  buscarInput(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer$.next( this.termino );
  }

  // uotra forma de hacerlo es recibir el event
/*   teclaPresionada( event: any) {
    const valor = event.target.value;
    console.log(valor);
  } */

}


