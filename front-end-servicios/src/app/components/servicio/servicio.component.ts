import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/model/service.model';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  showMap = false;
  serviceInformation: Service;

  constructor() { }

  ngOnInit() {
  }

  dataCompleted(e) {
    this.showMap = true;
    this.serviceInformation = e;
  }

}
