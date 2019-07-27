import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Service } from 'src/app/model/service.model';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';


@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {

  service = new Service();

  @Output() completedEmit: EventEmitter<Service> = new EventEmitter<Service>();

  constructor() { }

  ngOnInit() {
  }


  validateToOpenMap() {
    if (this.service.descripcion) {
      this.completedEmit.emit(this.service);
    }
  }
}
