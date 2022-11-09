import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss']
})
export class ScreensaverComponent implements OnInit {

  today: Date = new Date();
  timeSeparatorVisible: boolean = true;
  
  timeSeparatorSub:Subscription;
  dateTimeSub:Subscription;

  constructor() {

    const timeSeparatorSource = interval(500);
    const dateTimeSource = interval(1000);

    this.timeSeparatorSub = timeSeparatorSource.subscribe(val => {
      this.timeSeparatorVisible = !this.timeSeparatorVisible;
    });
    this.dateTimeSub = dateTimeSource.subscribe(val => {
      this.today = new Date();
    });
  }

  ngOnInit(): void {
  }

}
