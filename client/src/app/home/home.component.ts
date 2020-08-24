import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {

      }
    );
  }

}
