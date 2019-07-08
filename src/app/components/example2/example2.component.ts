import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}