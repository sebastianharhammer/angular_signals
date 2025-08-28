import { Component } from '@angular/core';
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
  countArr = [];
  
  calculate() {
    /* this.count.set(10); */
    this.count.update(count => count + 1);
  }
}
