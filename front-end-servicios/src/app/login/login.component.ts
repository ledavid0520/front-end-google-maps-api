import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showLogin = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get userInfoCompleted() {
    // return !(this.userInfo.username && this.userInfo.password);
    return true;
  }

  login() {
    sessionStorage.setItem('LOGGED', this.loginForm.value.username);
    this.router.navigate(['/servicio']);
  }

  authenticate() {
    this.usuarioService.getUsuario(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      response => {
        if (response.docs.length > 0) {
          this.login();
        } else {
          this.signUp();
        }
      }, error => {
        console.error(error)
      });
  }

  getUsuario() {

  }
  signUp() {
    this.showLogin ? this.showLogin = false : this.registrarUsuario();
  }

  registrarUsuario() {
    let newUser: Usuario = this.loginForm.value;
    this.usuarioService.postUsuario(newUser).then(
      response =>
        this.login()
    ).catch(error =>
      console.error(error)
    );
  }

}
