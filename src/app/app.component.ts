import { Component } from '@angular/core';
import { animate, state, style, transition, trigger, sequence } from '@angular/animations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'wp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style ({
        opacity: 1
      })),
      state('close', style ({
        opacity: 0,
        display: 'none'
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        sequence([
          style({ display: 'block' }),
          animate('1.5s')
        ])
      ])
    ])
  ]
})
export class AppComponent {

  title: string = 'wallpanel';
  screenSaverVisible: boolean = false;
  timer: number;

  private screenSaverTime: number = environment.screenSaverTimeSec * 1000;

  constructor () {
    this.timer = window.setTimeout(() => { this.screenSaverVisible = true; }, this.screenSaverTime);
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timer);
  }

  public hideScreenSaver(): void {
    this.screenSaverVisible = false;
    this.resetScreenSaverTimer();
  }

  public resetScreenSaverTimer(): void {
    if(this.timer) {
      window.clearTimeout(this.timer);
    }
    this.timer = window.setTimeout(() => { this.screenSaverVisible = true; }, this.screenSaverTime);
  }
}
