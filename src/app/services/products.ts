import { Injectable } from '@angular/core';
import { PRODUCTS } from '../motos'; // Adjust the import path as necessary

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;  
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  private products: Product[] = PRODUCTS;
  
  constructor() { }
    
  getProducts(): Product[] {
    return this.products;
  }
  

}
