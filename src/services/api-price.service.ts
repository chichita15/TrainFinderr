import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPriceService {

  constructor(private http: HttpClient) { }

  getPrice(distance: number) {
    const localUrl = 'http://laptop-cthj4mer:8080/ArchivePrice3979078577742526671/calcul/' + distance;
    return this.http.get(localUrl);
  }
}
