import {Place} from './place';

export class Section {
  public arrivalDateTime: Date;
  public departureDateTime: Date;
  public type: string;
  public commercialMode: string;
  public iconName: string;
  public nameD: string;
  public nameA: string;
  private from: Place;
  private to: Place;



  constructor(e: any) {
    this.arrivalDateTime = new Date(
      Number(e.arrival_date_time.substr(0, 4)),
      Number(e.arrival_date_time.substr(4, 2)),
      Number(e.arrival_date_time.substr(6, 2)),
      Number(e.arrival_date_time.substr(9, 2)),
      Number(e.arrival_date_time.substr(11, 2)),
      Number(e.arrival_date_time.substr(13, 2))
    );
    this.departureDateTime = new Date(
      Number(e.departure_date_time.substr(0, 4)),
      Number(e.departure_date_time.substr(4, 2)),
      Number(e.departure_date_time.substr(6, 2)),
      Number(e.departure_date_time.substr(9, 2)),
      Number(e.departure_date_time.substr(11, 2)),
      Number(e.departure_date_time.substr(13, 2))
    );
    this.type = e.type;
    if (this.type === 'public_transport') {
      this.nameD = e.from.stop_point.name;
      this.nameA = e.to.stop_point.name;
    }
    this.setIconName(e);

  }


  private  setIconName(e) {

    if (e.type === 'crow_fly') {this.iconName = 'directions_run'; this.commercialMode = 'run';  this.type = 'Walking'; }
    if (e.type === 'transfer') {this.iconName = 'directions_walk'; this.commercialMode = 'walk'; this.type = 'Transfer'; }
    if (e.type === 'public_transport') {
      this.type = 'Transport public';
      this.iconName = 'train';
      this.commercialMode = e.display_informations.physical_mode;
    }
    if (this.type === 'waiting') {
      this.iconName = 'accessibility';
      this.commercialMode = 'wait';
    }
  }


}
