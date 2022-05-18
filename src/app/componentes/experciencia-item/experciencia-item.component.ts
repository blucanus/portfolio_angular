import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-experciencia-item',
  templateUrl: './experciencia-item.component.html',
  styleUrls: ['./experciencia-item.component.css']
})
export class ExpercienciaItemComponent implements OnInit {
  experienciaList:any;
  constructor(private datosPortfolio: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experiencia;
    })
  }

}
