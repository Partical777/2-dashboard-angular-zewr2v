import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component implements OnInit {

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}