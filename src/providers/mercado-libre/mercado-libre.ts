import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MercadoLibreProvider {
  apiLink:any = "https://api.mercadolibre.com/sites/MCO/search?q=";

  constructor(public http: Http) {
    console.log('Hello MercadoLibreProvider Provider');
  }
  searchItems(item:string){
      return new Promise((resolve, reject)=> {
        var link:string = this.apiLink + item;
        this.http.get(link).map(res=>res.json()).subscribe(
          (data) => {
            resolve(data.results)
          },
          (error) => {
            reject("Error: "+ error)
          });
  })}
}
