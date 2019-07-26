import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/model/service.model';


@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  service = new Service();

  @Output() completedEmit: EventEmitter<Service> = new EventEmitter<Service> ();

  constructor() { }

  ngOnInit() {
  }
  
  validateToOpenMap() {
    if(this.service.destino && this.service.origen) {
      this.completedEmit.emit(this.service);
    }
  }
}
