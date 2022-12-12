import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal, DomPortal} from '@angular/cdk/Portal'
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  constructor(private _viewContainerRef: ViewContainerRef) {}
 
  @ViewChild('templatePortalContent') templatePortalContent : TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent : ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal : ComponentPortal<any>;
  templatePortal : TemplatePortal<any>;
  domPortal : DomPortal<any>

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(Comp1Component);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}
