import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  displayStyle = "none";


  openPopup() {
    this.displayStyle = "block";
  }

  // closePopup() {
  //   this.displayStyle = "none";
  // }
  closePopup() {
    console.log("Closing popup...");
    this.displayStyle = 'none';
  }
}
