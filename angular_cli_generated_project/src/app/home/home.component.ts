import { Component, OnInit } from '@angular/core';

import { UtilService } from "../shared/services/util/util.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private utilService: UtilService
  ) { }

  ngOnInit() {
    // reset login status
    this.utilService.setTitle('Home');
  }
}
