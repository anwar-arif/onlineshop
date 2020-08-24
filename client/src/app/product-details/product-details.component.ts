import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private router: Router) { 
              }

  ngOnInit(): void {
    // console.log("url: " + this.router.url);
    console.log('okay');
    // this.product = this.productService.getProduct("5f4011d1fadf274a8862865a");
  }

}
