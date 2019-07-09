import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}