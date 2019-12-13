import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

import { CartHttpCallService } from "../cart-http-call.service";

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent implements OnInit {
  public currentParamval: any;
  public listItem:any;
  constructor(private route: ActivatedRoute, private router:Router, private itemlist: CartHttpCallService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentParamval = params.id;
    })
    this.itemlist.getShopItems().subscribe(list_item =>{
      this.listItem=list_item;
    })
  }

  detail_navigation(detailid){
    this.router.navigate(['cartdetails',detailid])
  }

}
