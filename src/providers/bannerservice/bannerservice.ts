import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppSettings } from '../../app/app.globals';
import  { BannerItem } from '../../components/banner/banner.item'
import  { CellphoneBannerComponent } from '../../components/banner/cellphone-banner.component'
import  { PlanBannerComponent } from '../../components/banner/plan-banner.component'
/*
  Generated class for the BannerserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BannerserviceProvider {

  constructor(public http: HttpClient) {
  }

  getBanner() {
    return new Promise(resolve => {
      this.http.get(AppSettings.BASEURL + '/products/new').subscribe(data => {
        let response: any = data;
        if (response.product && response.product.show && response.product.type === 'plan') {
          resolve(new BannerItem(PlanBannerComponent, response.product));
        } else if (response.product && response.product.show && response.product.type === 'cellphone') {
          resolve(new BannerItem(CellphoneBannerComponent, response.product));
        }
      }, err => {
        console.log(err);
      });
    });
  }

}
