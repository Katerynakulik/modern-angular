import { Product } from './../product';
import { Component, computed, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ProductCard, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {

  protected readonly searchTeam = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice: 99.99
    }
  ])

  protected readonly filteredProducts = computed(()=>{
    const term = this.searchTeam().toLocaleLowerCase().trim()
    if (!term) return this.products();

    return this.products().filter((product)=>
      product.name.toLocaleLowerCase().includes(term) ||
      product.description.toLocaleLowerCase().includes(term)
    )
  })

  protected clearSearch(){
    this.searchTeam.set('')
  }
  // protected trimSearch(){
  //   this.searchTeam.update((value) => value.trim())
  // }

  protected onAddToCard(product: Product){
    console.log('Added to Cart:', product.name)

  }
}
