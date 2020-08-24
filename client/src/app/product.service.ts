import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, from } from 'rxjs';

import { Product } from './product';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl = "https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products";
  
  productList: Product[];

  constructor(private http: HttpClient) {
    if (!this.productList || this.productList.length == 0) {
      this.getProductList().subscribe(
        (data) => this.productList = data
      );
    }
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productUrl);
  }

  getProduct(id: string) {
    return this.productList.find(product => product._id === id);
  }

  errorHandler(errorResponse: HttpErrorResponse) {
    return Observable.throw(errorResponse.message || "Server error");
  }
}
