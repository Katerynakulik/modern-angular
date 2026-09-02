import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {}
