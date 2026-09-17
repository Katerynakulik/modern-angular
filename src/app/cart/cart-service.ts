import { Service, signal } from '@angular/core';
import { Product } from '../products/product';

@Service()
export class CartService {

  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product){
    this.cartItems.update((items) =>[...items, product]);
    console.log('Added to Cart:', product.name)

  }

}
