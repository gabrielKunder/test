import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from '../components/home/home.component';
import { CellphoneBannerComponent } from '../components/banner/cellphone-banner.component';
import { PlanBannerComponent } from '../components/banner/plan-banner.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AdvertisingcampaignDirective } from '../directives/advertisingcampaign/advertisingcampaign';
import { BannerserviceProvider } from '../providers/bannerservice/bannerservice';
@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    AdvertisingcampaignDirective,
    CellphoneBannerComponent,
    PlanBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    CellphoneBannerComponent,
    PlanBannerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BannerserviceProvider,
    HttpClientModule
  ]
})
export class AppModule {}
