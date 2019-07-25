import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';



@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit, OnChanges {
  
  @Input('serviceInformation') serviceInformation;

  title: string = 'Detalles Servicio';
  latOrigen: number = 4.624335;
  lngOrigen: number = -74.033644;

  latDestino: number = 5.535280;
  lngDestino: number = -73.367780;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.serviceInformation){
      if(changes.serviceInformation.currentValue){
        this.openMap();
      }
    }
  }

  openMap() {
    // const a = new google.maps.LatLng(this.latOrigen, this.lngOrigen);
    // const b = new google.maps.LatLng(this.latDestino, this.lngDestino);
    // const distance = google.maps.geometry.spherical.computeDistanceBetween(a, b);
  }

}
