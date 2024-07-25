import { Component } from '@angular/core';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.scss']
})
export class ServicesDetailComponent {
  scrollToElement($element: any,): void {
    console.log($element); //returns undefinded
    $element.scrollIntoView({ //throws an error because $element is undefined
      behavior: "smooth",
      block: "start",
      top:0,
      inline: "nearest"
    });
  }
}
