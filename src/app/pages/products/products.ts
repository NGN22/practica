import { Component } from '@angular/core';
import { ProductsService } from '../../services/products'; // Adjust the import path as necessary
import { Product } from '../../services/products'; // Adjust the import path as necessary

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productos: Product[] = [];

  constructor(private products: ProductsService) {
      this.productos = this.products.getProducts();
  
  }
}
