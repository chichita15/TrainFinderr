import {Injectable} from '@angular/core';
// declare var require: any;
// const XML = require('pixl-xml');

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  constructor() { }
  private res: string;

  soapCall(latA: number, longA: number, latB: number, longB: number): string {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://laptop-cthj4mer:8080/ArchiveDistance1956867283127562256/services/HelloWorld?wsdl', true);
    const sr =
      '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:exam="http://example/">' +
        '   <soapenv:Header/>' +
        '   <soapenv:Body>' +
        '      <exam:distance_2_towns>' +
        '         <arg0>' + latA + '</arg0>' +
        '         <arg1>' + longA + '</arg1>' +
        '         <arg2>' + latB + '</arg2>' +
        '         <arg3>' + longB + '</arg3>' +
        '      </exam:distance_2_towns>' +
        '   </soapenv:Body>' +
        '</soapenv:Envelope>';
    xmlhttp.onreadystatechange =  () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const xml = xmlhttp.responseText;
          this.res = xml;
        }
      }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
    return this.res;
  }
}
