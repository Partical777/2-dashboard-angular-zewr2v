import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';

import { Example1Component } from '../../components/example1/example1.component';
import { Example2Component } from '../../components/example2/example2.component';
import { Example3Component } from '../../components/example3/example3.component';
import { Example4Component } from '../../components/example4/example4.component';
import { Example5Component } from '../../components/example5/example5.component';
import { Example6Component } from '../../components/example6/example6.component';
import { Example7Component } from '../../components/example7/example7.component';

const components = {
  example1: Example1Component,
  example2: Example2Component,
  example3: Example3Component,
  example4: Example4Component,
  example5: Example5Component,
  example6: Example6Component,
  example7: Example7Component
};
@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges {
  @Input() componentRef: string;
  component: ComponentRef<any>;
  
  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }
  ngOnChanges(): void {
    const component = components[this.componentRef];
    
    if (component) {
      this.container.clear();   //clear viewer inside
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }
}