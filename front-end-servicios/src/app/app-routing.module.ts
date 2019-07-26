import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicioComponent } from './components/servicio/servicio.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'servicio',
    component: ServicioComponent,
    // canActivate: [AuthenticationGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
