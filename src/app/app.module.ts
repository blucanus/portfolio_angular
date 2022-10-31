import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExpercienciaItemComponent } from './componentes/experciencia-item/experciencia-item.component';
import { EducacionItemComponent } from './componentes/educacion-item/educacion-item.component';
import { SkillsItemComponent } from './componentes/skills-item/skills-item.component';
import { ProyectosItemComponent } from './componentes/proyectos-item/proyectos-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DatosPortfolioService } from './servicios/datos-portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ExpercienciaItemComponent,
    EducacionItemComponent,
    SkillsItemComponent,
    ProyectosItemComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatosPortfolioService,
  { provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
