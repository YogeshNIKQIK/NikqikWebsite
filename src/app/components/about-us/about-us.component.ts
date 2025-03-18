import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  displayStyleModel1: string = 'none'; // Initial display style for model 1
  displayStyleModel2: string = 'none'; // Initial display style for model 2

  openPopup(model: number) {
    // if (model === 1) {
    //   this.displayStyleModel1 = 'block'; // Display model 1
    // } else if (model === 2) {
    //   this.displayStyleModel2 = 'block'; // Display model 2
    // }
  }

  closePopup(model: number) {
    // if (model === 1) {
    //   this.displayStyleModel1 = 'none'; // Hide model 1
    // } else if (model === 2) {
    //   this.displayStyleModel2 = 'none'; // Hide model 2
    // }
  }

}

