import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadoLibreProvider } from '../../providers/mercado-libre/mercado-libre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[MercadoLibreProvider]
})
export class HomePage {
  items: any;
  myInput: string;
  constructor(public navCtrl: NavController,private _mercadoLibre: MercadoLibreProvider) {}

  onInput($event){
    if (this.myInput){
      this._mercadoLibre.searchItems(this.myInput).then((response) => {
        this.items = response;
     }).catch( (err) => {
       console.log("Error",err);
     })
    }
  }

}
