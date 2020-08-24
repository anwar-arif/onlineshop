import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private router: Router,
            private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.add(this.product._id);
  }

}
