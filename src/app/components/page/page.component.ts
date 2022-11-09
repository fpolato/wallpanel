import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public refreshPage(): void {
    window.location.reload();
  }

}
