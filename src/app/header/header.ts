import { CartService } from './../cart/cart-service';
import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadge],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly cartService =inject(CartService);
}
