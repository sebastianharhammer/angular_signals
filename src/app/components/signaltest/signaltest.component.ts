import {Component, computed} from '@angular/core';
import { signal } from '@angular/core';

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

  calculate() {
    /* this.count.set(10); */
    this.count.update(count => count += 1);
  }

  calculateOnHover() {
    this.hoverCount.update(hoverCount => hoverCount += 1)
  }

  reset() {
    this.count = signal(0);
    this.hoverCount = signal(0);
    this.multi = signal(0);
  }
}
