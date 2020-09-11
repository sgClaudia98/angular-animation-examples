import { trigger, transition } from '@angular/animations';
import {SlidePush} from './transition-steps/slide-push';
import {FadeIn} from './transition-steps/fade-in';

// Routable animations
export const routesAnimations =
  trigger('routeAnimations', [
    transition('HomePage => AboutPage', SlidePush.rightLeft()),
    transition('AboutPage => HomePage', FadeIn.leftRight())
  ]);

