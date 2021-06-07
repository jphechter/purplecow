import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;
  clicks = 0;
  url = `https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`;

  handleClick() {
    this.http.get(this.url).toPromise().then((data: any) => {
      this.count = data['value'];
      this.clicks++;  // only show after the user clicks once
    })
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
