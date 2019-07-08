import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}