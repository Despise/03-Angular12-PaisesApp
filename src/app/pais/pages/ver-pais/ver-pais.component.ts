import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: PaisResponse;

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisSvc: PaisService
  ) { }


  /**
   * switchMap retorna un obserbable con la respuesta y se pasa como parametro implisito 
   * el id desestructurado.
   */
  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.paisSvc.buscarPorCodigoPais( id ) ),
     // map( console.log  ) // tambien puede ser tap
    )
    .subscribe( (pais:PaisResponse) => {
      this.pais = pais;
    });
  }

}
