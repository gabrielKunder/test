import { Component, Input } from '@angular/core';
import { BannerComponent }      from './banner.component';

@Component({
  template: `
    <div [ngStyle]="{'background-image': 'url(' + data.backgroundImg + ')', 'height': '120px'}">
        <div class="row">
            <div class="column left">
                <span>{{data.productName}}</span>
            </div>
            <div class="column right">
                <button (click)="open(data.link)">{{data.buttonText}}</button>
            </div>
        </div>
    </div>
  `
})
export class PlanBannerComponent implements BannerComponent {
  @Input() data: any;

  public open (url){
    window.open(url, "_blank");
  }

}

