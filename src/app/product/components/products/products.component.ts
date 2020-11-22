import { ProductsService } from './../../../core/services/product/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number): void{
    console.log('product', id);
  }

  fetchProducts(): void{
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
