import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

import { GridsterModule } from 'angular-gridster2';


//layout component
import { AppComponent } from './app.component';
import { SidenavAutosize } from './components/sidenav/sidenav-autosize.component';
import { ListOverview } from './components/list/list-overview.component';
import { MenuPosition } from './components/menu/menu-position.component';
import { GridListDynamicExample } from './components/grid-list-gynamic/grid-list-gynamic.component';
import { Card } from './components/card/card-component';
import { LayoutComponent } from './components/layout/layout.component';

//directive
import { D3LineChartDirective } from './directives/d3/line-chart.directive';
import { LayoutItemDirective } from './directives/layout-item/layout-item.directive';

//entry component
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, MatGridListModule, MatCardModule, FlexLayoutModule, GridsterModule],

  declarations: [ AppComponent, SidenavAutosize, ListOverview, MenuPosition, GridListDynamicExample, Card, D3LineChartDirective, LayoutComponent, LayoutItemDirective, Example1Component, Example2Component ],
  
  bootstrap:    [ AppComponent ],
  entryComponents: [
    Example1Component,
    Example2Component
  ]
})
export class AppModule { }
