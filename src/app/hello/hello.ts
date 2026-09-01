import { Component, computed, signal } from '@angular/core';

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
  protected doubleCount = computed(() => this.count() * 2);
  // getdoubleCount(){
  //   console.log('Method was called!')
  //   return this.count()*2;
  // }
  increaseCounter() {
    this.count.update((value) => value + 1);
  }
  decreaseCounter() {
    this.count.update((value) => value - 1);
  }
  resetCounter() {
    this.count.set(0);
}}
