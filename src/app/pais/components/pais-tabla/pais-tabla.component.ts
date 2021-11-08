import { Component, Input, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: PaisResponse[]=[];
  @Input() error!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
