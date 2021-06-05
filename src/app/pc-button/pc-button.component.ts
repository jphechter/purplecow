import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pc-button',
  templateUrl: './pc-button.component.html',
  styleUrls: ['./pc-button.component.css']
})
export class PcButtonComponent implements OnInit {
  @Input() buttonText?: string;

  @Output() response = new EventEmitter();


  handleClick() {
    this.response.emit("my data")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
