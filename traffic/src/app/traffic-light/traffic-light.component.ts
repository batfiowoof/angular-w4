import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css',
})
export class TrafficLightComponent implements OnInit {
  color: string = 'red';

  constructor() {}

  ngOnInit() {
    this.color = 'red';
  }
}
