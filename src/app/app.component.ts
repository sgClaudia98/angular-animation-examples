import { Component } from '@angular/core';
import {routesAnimations} from './animations/animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routesAnimations
  ]
})
export class AppComponent {
  title = 'angular-animation-examples';

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
