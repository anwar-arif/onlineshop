import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = new Array();

  constructor(private cartService: CartService,
            private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.productList$.subscribe(
      (data) => {
        this.cartList.push(this.productService.getProduct(data));
      }
    )
  }

  removeFromCartList(id: string) {
    var index = this.cartList.map(product => product._id).indexOf(id);
    if (index != -1) {
      this.cartList = this.cartList.splice(index, 1);
    }
  }

}
