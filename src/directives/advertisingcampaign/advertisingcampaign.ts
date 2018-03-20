import { Directive, ViewContainerRef , ElementRef, HostListener,Input } from '@angular/core';
import { BannerserviceProvider } from '../../providers/bannerservice/bannerservice';

/**
 * Generated class for the AdvertisingcampaignDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[advertisingcampaign]', // Attribute selector
})

export class AdvertisingcampaignDirective {


  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
