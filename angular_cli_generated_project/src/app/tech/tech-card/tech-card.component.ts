import { Component, OnInit, Input } from '@angular/core';
import {Tech} from "../tech.component";

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.css']
})
export class TechCardComponent implements OnInit {
  @Input() public tech: Tech;

  constructor() { }

  ngOnInit() {
  }

}
