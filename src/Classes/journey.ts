import {Section} from './section';

export class Journey {
  public arrivalDateTime: Date;
  public departureDateTime: Date;
  public sections: Section[];

  constructor(arrivalDateTime: string, departureDateTime: string, sections: Section[]) {
    console.log(arrivalDateTime);
    this.arrivalDateTime = new Date(
      Number(arrivalDateTime.substr(0, 4)),
      Number(arrivalDateTime.substr(4, 2)),
      Number(arrivalDateTime.substr(6, 2)),
      Number(arrivalDateTime.substr(9, 2)),
      Number(arrivalDateTime.substr(11, 2)),
      Number(arrivalDateTime.substr(13, 2))
    );
    this.departureDateTime = new Date(
      Number(departureDateTime.substr(0, 4)),
      Number(departureDateTime.substr(4, 2)),
      Number(departureDateTime.substr(6, 2)),
      Number(departureDateTime.substr(9, 2)),
      Number(departureDateTime.substr(11, 2)),
      Number(departureDateTime.substr(13, 2))
    );
    this.sections = sections;

  }
}
