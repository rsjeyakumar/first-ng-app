import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { CartHttpCallService } from "../cart-http-call.service";
import { CartDetailsComponent } from '../list-cart/cart-details/cart-details.component';

import { InterComponentCommunicationService } from "../intercomcom.service";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  private shopCategrys: any;
  private cartLength: any;
  private subscription: any;
  constructor(private route: ActivatedRoute, private router: Router, private catlist: CartHttpCallService, private communication: InterComponentCommunicationService) { }

  ngOnInit() {
    this.catlist.getShopList().subscribe(data => {
      this.shopCategrys = data;
    })


    this.subscription = this.communication.emitval.subscribe(res => {
      
      this.fetchCart();
    })
    this.fetchCart();

    // this.route.params.subscribe(params =>{
    //   var id = params['id']
    //   console.log(id);
    // })
    // this.route.queryParams.subscribe(params =>{
    //   console.log(params);
    // })

  }


  naviage(id) {
    this.router.navigate(['/list'], { queryParams: { 'id': id } })
  }
  fetchCart() {
    this.catlist.cartList().subscribe(res => {
      this.cartLength = res;
    })
  }
  onDestroy() {
    // this.subscription
  }

}
