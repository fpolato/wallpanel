import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wp-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() title: string = '';

  today: Date = new Date();
  dateTimeTimeout: any;

  constructor() {
    this.dateTimeTimeout = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.dateTimeTimeout);
  }

  public refreshPage(): void {
    window.location.reload();
  }

}
