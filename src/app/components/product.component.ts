import { Product } from './../product.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent{

  //recibe dato de otro componente
  @Input() product: Product;
  //envia dato al componente padre
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(): void{
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
