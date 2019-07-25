import { Component, OnInit } from '@angular/core';
import { UserLog } from '../model/userLog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo = new UserLog();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticate(){
    if(this.userInfo.name && this.userInfo.password){
      this.router.navigate(['/servicio']);
    }
  }
}
