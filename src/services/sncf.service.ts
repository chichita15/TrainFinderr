import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SncfService {

  private auth: HttpHeaders;
  // https://api.sncf.com/v1/coverage/sncf/journeys?from=admin:fr:75056&to=admin:fr:69123
  constructor(private http: HttpClient) {
    this.auth = new HttpHeaders().set('Authorization', 'bba52e6a-a1b0-4c90-b821-8314a87b3b7c');
  }

  public getJourneys(from: string, to: string, dateTime: string) {
    return this.http.get('https://api.sncf.com/v1/coverage/sncf/journeys',
      { params :
          {from, to , dateTime, min_nb_journeys : '1' , datetime_represents : 'departure'},
        headers : this.auth,
      });
  }

  public getPlaces(place: string) {
    return this.http.get('\n' +
      'https://api.sncf.com/v1/coverage/sncf/places',
      {
        params : {
          q : place
        },
        headers : this.auth
      });
  }

}
