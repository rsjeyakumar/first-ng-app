import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartHttpCallService } from "../../cart-http-call.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
//import {tap,map} from 'rxjs'

import { InterComponentCommunicationService } from "../../intercomcom.service";


interface Item {
  name: string,
  avatar: string,
  price: string
}

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})

export class CartDetailsComponent implements OnInit {
  private currentParamval: any;
  private details: any;
  private cartDetails: any;
  private detailform: FormGroup;
  private sizes: string[] = ["small", "medium", "large"];

  constructor(private route: ActivatedRoute, private detail: CartHttpCallService, private comunication:InterComponentCommunicationService) {
    this.detailform = new FormGroup({
      'size': new FormControl(this.sizes[0]),
      'quanity': new FormControl('', [Validators.required, this.validateNumber])
    })

  }
  get formcontrollist() {
    return this.detailform.controls;
    // return this.detailform.get('quanity');
  }
  validateNumber(c: FormControl) {
    let numberExp: RegExp = /^[0-9]*$/;
    console.dir(c);
    return numberExp.test(c.value) ? null : {
      validateNumber: {
        valid: false
      }
    }

  }
  ngOnInit() {
    this.route.params.subscribe(params => this.currentParamval = params.id);
    console.log(this.route.params.subscribe(params => this.currentParamval = params.id))
    this.detail.getDetails(this.currentParamval).subscribe(params => { this.details = params; return this.details });
  }

  ngViewInit() {

  }

  addCart(): void {

    var items: any = [];

    let myCartItem = {
      itemId: this.currentParamval,
      name: this.details.name,
      price: this.details.price,
      avatar: this.details.avatar,
      size: this.detailform.get('size').value,
      quantity: this.detailform.get('quanity').value

    }
    
    this.detailform.reset();
    this.detail.addCart(myCartItem)

    this.comunication.emitval.next(true);
  }



}
