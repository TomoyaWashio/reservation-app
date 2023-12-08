import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

products:any = [1,2,3,4]

constructor() {}

ngOnInit() {
  this.products = products
}

}
