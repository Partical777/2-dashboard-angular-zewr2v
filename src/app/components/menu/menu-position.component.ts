import {Component} from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent  } from '../../services/layout.service';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'menu-positioning',
  templateUrl: 'menu-position.component.html',
  styleUrls: ['menu-position.component.css'],
})
export class MenuPosition {
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


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */