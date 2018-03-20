import { Component, Input }  from '@angular/core';
import { BannerComponent }      from './banner.component';

@Component({
  template: `
      <div [ngStyle]="{'background-color': 'black', 'height': '120px'}">
          <div class="row">
              <div class="column left">
                  <img [src]="data.productImg" [ngStyle]="{'height': '100%'}"/>
              </div>
              <div class="column right">
                  <span>{{data.productName}}</span><br/>
                  <span>{{data.productDescription}}</span>
              </div>
          </div>
      </div>
  `
})
export class CellphoneBannerComponent implements BannerComponent {
  @Input() data: any;
}


