import {Component, computed, Signal} from '@angular/core';
import {signal, effect} from '@angular/core';
import {delay} from 'rxjs';


@Component({
  selector: 'app-signaltest',
  imports: [],
  templateUrl: './signaltest.component.html',
  styleUrl: './signaltest.component.scss',
  standalone: true
})
export class SignaltestComponent {
  count = signal(0);
  hoverCount = signal(0);
  multi = computed(() => this.count() * this.hoverCount());
  isHovered = false;
  readonly constructorCount = signal(0);


  constructor() {
    effect(() => {
      console.log(`The count is: ${this.constructorCount()}`);
    });
  }

  info() {
    this.constructorCount.update(constructorCount => constructorCount += 1)
  }

  calculate() {
    /* this.count.set(10); */
    this.count.update(count => count += 1);
  }

  setIsHovered() {
    this.isHovered = true;
    this.calculateOnHover()
  }

  unsetIsHovered() {
    this.isHovered = false;
    this.calculateOnHover()
  }

  calculateOnHover() {
    if (this.isHovered) {
    setTimeout(() => {
      this.hoverCount.update(hoverCount => hoverCount += 1)
      console.log(this.hoverCount);
      this.calculateOnHover();
    }, 200);
    }
  }

  stopOnHover() {
    this.isHovered = false;
    console.log(`stopOnHover`);
  }

  reset() {
    this.count = signal(0);
    this.hoverCount = signal(0);
    this.multi = signal(0);
    this.constructorCount.set(0)
  }
}
