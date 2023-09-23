import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upsell-page';
  navText: Array<String> = [
    '30-DAY SATISFACTION GUARANTEE',
    'Free delivery on orders over $40.00',
    '50.000+ HAPPY CUSTOMERS',
    '100% Money Back Guarantee'
  ]
}
