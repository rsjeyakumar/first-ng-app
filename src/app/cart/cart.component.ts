import { Component, OnInit } from '@angular/core';
import { CartHttpCallService } from "../cart-http-call.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private carts:any;

  constructor(private cart:CartHttpCallService) { }

  ngOnInit() {
    this.getCartList();
  }
  getCartList(){
    this.cart.cartList().subscribe(res =>{
      this.carts=res;
    })
  }

  delectItem(id){
    this.cart.deleteCartItem(id).subscribe(res =>{
      this.getCartList();
    })
  }

}
