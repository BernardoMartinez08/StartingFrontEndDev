import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PantallaComponent } from './componentes/pantalla/pantalla.component';
import { BotonClearComponent } from './componentes/boton-clear/boton-clear.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PantallaComponent,
    BotonClearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
