import {Component} from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent  } from '../../services/layout.service';

@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SideNav {
  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }
  get components(): IComponent[] {
    return this.layoutService.components;
  }
  constructor(
    private layoutService: LayoutService
  ) { }
}