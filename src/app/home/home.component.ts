import {Component, OnInit} from '@angular/core';
import {SncfService} from '../../services/sncf.service';
import {Place} from '../../Classes/place';
import {SoapService} from '../../services/soap.service';
import {ApiPriceService} from '../../services/api-price.service';
import {Journey} from '../../Classes/journey';
import {Section} from '../../Classes/section';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private sncfService: SncfService, private  soapService: SoapService,
              private apiPriceService: ApiPriceService) {
    this.places = [];
    this.journeys = [];
  }
  public places: Place[];
  public journeys: Journey[];
  public sections: Section[] = [];
  private placeD: Place;
  private placeA: Place;
  public nameD: string;
  public nameA: string;
  public commercialMode: string;
  private PA: string;
  private PD: string;
  private distance: string;
  private dateTime: string;
  private exportTime = { hour: 7, minute: 30, meriden: 'PM', format: 24 };
  startDate = new Date();

  ngOnInit() {
  }
  ////////////////////////////////////////////////////////////////////


  getPlaces(place: string) {
    this.places = [];
    this.sncfService.getPlaces(place).subscribe((data: any) => {
      data.places.forEach(e => {
        if (e.embedded_type === 'administrative_region') {
        } else {
          this.places.push(new Place(e.name, e.stop_area.coord.lat, e.stop_area.coord.lon, e.id));
        }
        console.log(data);
      });
    });
  }

  getJourneys() {
    this.PD = String(this.placeD.lon) + ';' + String(this.placeD.lat);
    this.PA = String(this.placeA.lon) + ';' + String(this.placeA.lat);
    this.sncfService.getJourneys(this.PD, this.PA, this.dateTime).subscribe((data: any) => {
      data.journeys.forEach(e => {
        const sections: Section[] = [];
        e.sections.forEach( sec => {
          const section = new Section(sec);
          sections.push(section);
          this.sections.push(section);
          if (section.iconName === 'train') {
            this.nameA = section.nameA;
            this.nameD = section.nameD;
            this.commercialMode = section.commercialMode;
          }
        });
        this.journeys.push(new Journey(e.arrival_date_time, e.departure_date_time, sections));

      });
      console.log(this.journeys);
      console.log(this.sections);

    });
    this.getCall2();
    this.getCall();

  }
  getJourneys1() {
    this.PD = String(this.placeD.lon) + ';' + String(this.placeD.lat);
    this.PA = String(this.placeA.lon) + ';' + String(this.placeA.lat);
    this.sncfService.getJourneys(this.PD, this.PA, this.dateTime).subscribe((data: any) => {
      console.log(data);
    });
  }
  setDateTime(date) {
    const tmp = new Date(date);
    let tmpString;
    tmpString = tmp.toISOString().replace(/[-]/g, '');
    tmpString = tmpString.split('T')[0];
    tmpString +=  'T' + ( '0' + this.exportTime.hour.toString()).slice(-2) + ( '0' + this.exportTime.minute.toString()).slice(-2) + '00';
    this.dateTime = tmpString;
  }


  arrivingSelected(place: Place) {
    this.placeA = place;
  }

  departingSelected(place: Place) {
    this.placeD = place;
  }

  displayFn(val: Place) {
    return val ? val.name : val;
  }

  getCall() {
     this.distance = this.soapService.soapCall(this.placeD.lat, this.placeD.lon, this.placeA.lat, this.placeA.lon);
     document.getElementById('calcule').innerHTML = 'Distance: '
        + this.distance + ' km';
  }

  getCall2() {
    this.apiPriceService.getPrice(452.37)
      .subscribe(data => {
        if (typeof data === 'number') {
          document.getElementById('prix').innerHTML = 'prix du voyage: '
            + Math.round(data) + ' euros';
        }
   });
  }





}
