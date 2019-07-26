import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
declare var google;



@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit, OnChanges {

  @Input('serviceInformation') serviceInformation;

  title = 'Detalles Servicio';
  latOrigen = 4.624335;
  lngOrigen = -74.033644;

  latDestino = 5.535280;
  lngDestino = -73.367780;

  zoom = 7;

  origin: any;
  destination: any;
  distance: any;

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.serviceInformation) {
      if (changes.serviceInformation.currentValue) {
        this.openMap();
      }
    }
  }

  openMap() {
    this.origin = { lat: this.latOrigen, lng: this.lngOrigen };
    this.destination = { lat: this.latDestino, lng: this.lngDestino };

    this.mapsAPILoader.load().then(() => {
      const origin = new google.maps.LatLng(this.latOrigen, this.lngOrigen);
      const destination = new google.maps.LatLng(this.latDestino, this.lngDestino);

      this.distance = google.maps.geometry.spherical.computeDistanceBetween(origin, destination) / 1000;

    });
  }

}
