import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Switch Case';
  color = 'green';
  displayVal='';

  getName(name: string) {
    alert(name);
  }
  getData(secondName: string) {
    alert(secondName);
  }

  getdata(val: string): void {
    console.warn(val);
  }
  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }
  count = 0;
  counter(type: string) {
    if (type === 'add' && this.count < 101) {
      this.count++;
    } else if (type === 'subtract' && this.count > 0) {
      this.count--;
    }
  }

  resetCounter() {
    this.count = 0;
  }
}
