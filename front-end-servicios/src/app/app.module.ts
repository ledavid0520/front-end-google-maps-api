import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ServiceDataComponent } from './components/servicio/service-data/service-data.component';
import { ServiceMapComponent } from './components/servicio/service-map/service-map.component';
import { LogoutComponent } from './logout/logout.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { UserService } from './servicios/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicioComponent,
    MenuComponent,
    ServiceDataComponent,
    ServiceMapComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPQN85Z3E5MRoRwX69Rev_kCfHUFcFoVI',
      libraries: ['geometry']
    }),
    AgmDirectionModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
