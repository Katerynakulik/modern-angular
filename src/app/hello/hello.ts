import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.scss',
  templateUrl: './hello.html',
})
export class Hello {
  protected title = 'Welcome to modern!';
  protected isDisabled = false;
  protected onClick() {
    console.log('Hello button clicked!');
    this.isDisabled = !this.isDisabled;
}}
