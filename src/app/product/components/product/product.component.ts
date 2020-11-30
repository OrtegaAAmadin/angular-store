import { CartService } from './../../../core/services/cart.service';
import { Product } from '../../../product.model';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  // recibe dato de otro componente
  @Input() product: Product;
  // envia dato al componente padre
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService){
    console.log('1.-constructor');
  }
/*
  ngOnChanges(change: SimpleChanges): void{
    console.log('2.-ngOnChanges');
    console.log(change);
  }*/

  ngOnInit(): void {
    //console.log('3.-ngOnInit');
  }
/*
  ngDoCheck(): void {
    console.log('4.-ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5.-ngOnDestroy');
  }
*/
  addCart(id: string): void{
    console.log('añadir al carrito');
    // this.productClicked.emit(id);
    this.cartService.addCart(this.product);
  }

}
