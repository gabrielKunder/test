import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { AdvertisingcampaignDirective } from '../../directives/advertisingcampaign/advertisingcampaign';
import { BannerItem }      from '../../components/banner/banner.item';
import { BannerComponent } from '../../components/banner/banner.component';
import  { BannerserviceProvider } from '../../providers/bannerservice/bannerservice'
/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit{

  @Input() banner: BannerItem;
  currentBannerIndex: number = -1;
  @ViewChild(AdvertisingcampaignDirective) bannerHost: AdvertisingcampaignDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private bannerService: BannerserviceProvider) { }

  ngOnInit() {
    this.getBanner();
  }


  getBanner() {
    this.bannerService.getBanner().then(data => {
      let response: any = data;
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(response.component);

      let viewContainerRef = this.bannerHost.viewContainerRef;
      viewContainerRef.clear();

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<BannerComponent>componentRef.instance).data = response.data;
    });
  }

}
