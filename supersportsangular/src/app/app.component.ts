import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <headcontent></headcontent>
            <router-outlet></router-outlet>
            <footercontent></footercontent>
  `
})
export class AppComponent  { name = 'Angular'; }
