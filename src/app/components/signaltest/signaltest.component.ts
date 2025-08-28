import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ counter() }}</h1>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(v => v + 1);
  }
}


/* import { signal } from '@angular/core';
import { computed } from '@angular/core';
import { effect } from '@angular/core';

const counter = signal(0);  // initial value = 0

counter();       // 0
counter.set(10); // sets to 10
counter.update(v => v + 1); // sets to 11

const doubleCounter = computed(() => counter() * 2);


effect(() => {
  console.log('Counter is:', counter());
});

 */