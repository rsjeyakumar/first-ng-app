import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CartDetailsComponent } from './list-cart/cart-details/cart-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: "list", component: ListCartComponent },
  { path: "cartdetails/:id", component: CartDetailsComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
