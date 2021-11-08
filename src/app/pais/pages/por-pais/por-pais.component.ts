import { Component } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public error: boolean = false;
  public paises: PaisResponse[] = [];
  public paisesSugeridos: PaisResponse[] = []
  public mostrarSugerencias: boolean = false;

  constructor( private porPaisSvc: PaisService ) { }


  buscar(termino: string) {
    this.termino = termino;
    this.error = false;  
    this.paises = [];
    this.porPaisSvc.buscarPais(this.termino)
      .subscribe( paises => {
       this.paises = paises;
      }, (error) => {
        this.error = true;
      }
    );
  }

  sugerencias( termino: string) {
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.error = false;
    this.porPaisSvc.buscarPais( termino )
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
    );
  }

  buscarSugerido( termino: string) {
    this.buscar( termino );
  }

}
