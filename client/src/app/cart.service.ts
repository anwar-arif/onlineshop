import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productSource = new Subject<string>();
  productList$ = this.productSource.asObservable();

  constructor() { }

  addProduct(id: string) {
    this.productSource.next(id);
  }
}
