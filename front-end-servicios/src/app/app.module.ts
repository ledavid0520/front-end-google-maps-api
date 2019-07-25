import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicioComponent } from './servicio/servicio.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ServiceDataComponent } from './servicio/service-data/service-data.component';
import { ServiceMapComponent } from './servicio/service-map/service-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicioComponent,
    MenuComponent,
    ServiceDataComponent,
    ServiceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPQN85Z3E5MRoRwX69Rev_kCfHUFcFoVI',
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
