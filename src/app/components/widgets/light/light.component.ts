import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wp-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  @Input() lightName: string = '';
  @Input() lightOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
