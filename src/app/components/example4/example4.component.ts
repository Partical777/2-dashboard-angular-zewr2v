import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}