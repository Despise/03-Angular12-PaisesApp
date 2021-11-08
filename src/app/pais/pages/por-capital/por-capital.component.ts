import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  public termino: string = '';
  public error: boolean = false;
  public paises: PaisResponse[] = [];

  constructor(private porPaisSvc: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;  
    this.paises = [];
    this.porPaisSvc.buscarCapital(this.termino)
      .subscribe( paises => {
       this.paises = paises;
      }, (error) => {
        this.error = true;
      }
    );
  }

  sugerencias( termino: string) {
    this.error = false;
    // TODO: 
  }

}
