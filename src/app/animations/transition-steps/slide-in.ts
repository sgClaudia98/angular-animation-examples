import {animate, animateChild, AnimationMetadata, group, query, style} from '@angular/animations';


export abstract class SlideIn {

  /** Transition steps of Down => Up
   *
   * @param timeLeave in ms
   * @param timeEnter in ms
   */
  public static downUp(timeLeave = 1500, timeEnter = 1500): AnimationMetadata[] {
    return [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({bottom: '-100%'})
      ]),
      query(':leave', animateChild()),
      query(':enter', [
        animate(timeEnter + 'ms ease-out', style({bottom: '0%'}))
      ]),
    ];
  }


  /** Transition steps of Up => Down
   *
   * @param timeLeave in ms
   * @param timeEnter in ms
   */
  public static upDown(timeLeave = 1500, timeEnter = 1500): AnimationMetadata[]{
    return [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({top: '-100%'})
      ]),
      query(':leave', animateChild()),
      query(':enter', [
        animate(timeEnter + 'ms ease-out', style({top: '0%'}))
      ]),
    ];
  }


  /** Transition steps of Left => Right
   *
   * @param timeLeave in ms
   * @param timeEnter in ms
   */
  public static leftRight(timeLeave = 1500, timeEnter = 1500): AnimationMetadata[]{
    return [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      query(':enter', [
        animate(timeEnter + 'ms ease-out', style({left: '0%'}))
      ]),
    ];
  }

  /** Transition steps of Right => Left
   *
   * @param timeLeave in ms
   * @param timeEnter in ms
   */
  public static rightLeft(timeLeave = 1500, timeEnter = 1500): AnimationMetadata[]{
    return [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      query(':enter', [
        animate(timeEnter + 'ms ease-out', style({ right: '0%'}))
      ]),
    ];
  }


}



