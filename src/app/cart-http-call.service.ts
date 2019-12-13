import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/index';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class CartHttpCallService {
  shopListUrl: string = 'http://localhost:3000/category';
  shoplist: string = "http://localhost:3000/shoplist";
  cartUrl: string = "http://localhost:3000/cart";
  // addCartUrl: string = "http://localhost:3000/addcart"
  constructor(private http: HttpClient) { }

  getShopList() {
    return this.http.get(this.shopListUrl);
  }
  getShopItems() {
    return this.http.get(this.shoplist)
  }
  getDetails(id) {
    return this.http.get(this.shoplist + "/" + id)
  }
  addCart(data): void {
    console.log(data)
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    })
    this.http.post(this.cartUrl, data, { headers: httpHeaders }).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err.message)
    });
  }
  cartList() {
    return this.http.get(this.cartUrl);
  }
  deleteCartItem(id){
    return this.http.delete(this.cartUrl+ "/" + id)
  }

}
