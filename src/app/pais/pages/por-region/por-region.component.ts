import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  public regionActiva: string = '';
  public error: boolean = false;
  public paisesPorRegion: PaisResponse[] = [];

  constructor(
    private regionSvc: PaisService 
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if( region === this.regionActiva ) {
      return;
    }
    this.regionActiva = region;
    this.paisesPorRegion = [];
    this.regionSvc.buscarPorRegion( region ).subscribe(
      (paises: PaisResponse[]) => {
        this.paisesPorRegion = paises;
      }, (error) => {
        this.error = true;
      });
  }

  getClassCSS( region: string): string {
   return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
