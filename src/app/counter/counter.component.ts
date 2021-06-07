import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
