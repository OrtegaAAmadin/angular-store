import { Observable } from 'rxjs';
import { CartService } from './../../../core/services/cart.service';
import { Product } from './../../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  product$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    this.product$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}
