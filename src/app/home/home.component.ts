import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  base_url = 'http://localhost/hotel.io/';

  constructor() {}

  ngOnInit(): void {}
}
