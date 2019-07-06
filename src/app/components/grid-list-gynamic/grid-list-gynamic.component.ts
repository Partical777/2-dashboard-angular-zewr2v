import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list-dynamic',
  templateUrl: 'grid-list-gynamic.component.html',
  styleUrls: ['grid-list-gynamic.component.css'],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    // {text: 'Two', cols: 1, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    // {text: 'Four', cols: 1, rows: 3, color: '#DDBDF1'},
    // {text: 'Five', cols: 1, rows: 3, color: 'lightyellow'},
  ];
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */