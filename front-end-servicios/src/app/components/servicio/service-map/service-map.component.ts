import { Component, OnInit, Input, OnChanges, SimpleChanges, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
declare var google;



@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit, OnChanges {

  @Input('serviceInformation') serviceInformation;

  @ViewChild('search', { static: false })
  private elementRef: ElementRef;

  @ViewChild('searchDestination', { static: false })
  private elementRefDestination: ElementRef;

  title = 'Detalles Servicio';
  titleDescription = 'Detalles Servicio';

  zoom: number;
  latitude: number;
  longitude: number;
  latitudeDest: number;
  longitudeDest: number;
  latlongs: any = [];
  latlong: any = {};
  searchControlOrigin: FormControl;
  searchControlDestination: FormControl;

  distance: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.latitude = 4.624335;
    this.longitude = -74.033644;

    this.latitudeDest = 5.535280;
    this.longitudeDest = -73.367780;

    this.zoom = 7;

    this.searchControlOrigin = new FormControl();
    this.searchControlDestination = new FormControl();

    this.setCurrentLocation();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.elementRef.nativeElement, {
          types: []
        });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          const latlong = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          };
          this.latlongs[0] = latlong;
          this.setMapDetails();
          this.searchControlOrigin.reset();
        });
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.serviceInformation) {
      if (changes.serviceInformation.currentValue) {
        this.titleDescription = changes.serviceInformation.currentValue.descripcion;
      }
    }
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 7;
          const latlongOrigen = {
            latitude: this.latitude,
            longitude: this.longitude
          };
          this.latlongs.push(latlongOrigen);

          const latlongDestino = {
            latitude: this.latitudeDest,
            longitude: this.longitudeDest
          };
          this.latlongs.push(latlongDestino);
          this.setMapDetails();
        });
    }
  }

  setMapDetails() {

    this.mapsAPILoader.load().then(() => {
      const origin = new google.maps.LatLng(this.latlongs[0].latitude, this.latlongs[0].longitude);
      const destination = new google.maps.LatLng(this.latlongs[1].latitude, this.latlongs[1].longitude);

      this.distance = google.maps.geometry.spherical.computeDistanceBetween(origin, destination) / 1000;

    });
  }


}
