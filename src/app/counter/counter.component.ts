import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() response = new EventEmitter();

  count = 1;
  clicks = 0;


  handleClick() {
    // this.response.emit("my data")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
