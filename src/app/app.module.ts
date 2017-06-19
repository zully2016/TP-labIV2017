import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ErrorComponent } from './error/error/error.component';
import { RegistrarseComponent } from './registrarse/registrarse/registrarse.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { LocalidadesComponent } from './Localidades/localidades/localidades.component';
import { LocalesComponent } from './locales/locales/locales.component';

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
