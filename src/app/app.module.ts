import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';

import { GridsterModule } from 'angular-gridster2';


//layout component
import { AppComponent } from './app.component';
import { ListOverview } from './components/list/list-overview.component';
import { MenuPosition } from './components/menu/menu-position.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideNav } from './components/sidenav/sidenav.component';

//directive
import { D3Directive } from './directives/d3/d3.directive';
import { LayoutItemDirective } from './directives/layout-item/layout-item.directive';

//entry component
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { Example6Component } from './components/example6/example6.component';
import { Example7Component } from './components/example7/example7.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, FlexLayoutModule, GridsterModule],

  declarations: [ AppComponent, ListOverview, MenuPosition, D3Directive, LayoutComponent, LayoutItemDirective, SideNav, Example1Component, Example2Component, Example3Component, Example4Component, Example5Component, Example6Component, Example7Component ],
  
  bootstrap:    [ AppComponent ],
  entryComponents: [
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component
  ]
})
export class AppModule { }
