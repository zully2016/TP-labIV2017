import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ProductoComponent } from './producto/producto.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { LocalesComponent } from './locales/locales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ErrorComponent,
    RegistrarseComponent,
    ProductoComponent,
    LocalidadesComponent,
    LocalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
