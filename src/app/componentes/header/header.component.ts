import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from '../../servicios/datos-portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      //console.log(data);
      this.miPortfolio = data;
    })
  }

}
