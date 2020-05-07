import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AcceptComponent } from './accept/accept.component';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SeleccionEspaciosComponent } from './seleccion-espacios/seleccion-espacios.component';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';

// Rutas necesarias para navegar entre componentes
const appRoutes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  { path: 'accept', component: AcceptComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'seleccion-espacios', component: SeleccionEspaciosComponent },
  { path: 'gerencia', component: GerenciaComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent },
  { path: 'app', component: AppComponent },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    ReservaComponent,
    GerenciaComponent,
    InicioComponent,
    LoginComponent,
    AcceptComponent,
    BusquedaComponent,
    SeleccionEspaciosComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BusquedaComponent]
})
export class AppModule { }
