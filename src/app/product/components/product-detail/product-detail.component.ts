import { ProductsService } from './../../../core/services/product/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void{
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct(): void{
    const newProduct: Product = {
      id: '23',
      title: 'nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(): void{
    const updateProduct: Partial<Product> = {
      price: 3000,
      description: 'Edicion producto'
    };
    this.productsService.updateProduct('23', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('23').subscribe(rpta => {
      console.log(rpta);
    });
  }

}
