import { Component, signal } from '@angular/core';

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
  }
  protected count = signal(0);
  increaseCounter() {
    this.count.update((value) => value + 1);
  }
  decreaseCounter() {
    this.count.update((value) => value - 1);
  }
  resetCounter() {
    this.count.set(10);
}}
