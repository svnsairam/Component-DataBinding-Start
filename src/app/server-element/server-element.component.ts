import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements  
AfterContentInit
, DoCheck
, OnInit
,OnChanges
, AfterContentChecked
, AfterViewInit
,AfterViewChecked
,OnDestroy {

  @ViewChild("panelHeaderId",{static:true}) panelHeader:ElementRef;
  @ContentChild("panelBodyId",{static:true}) panelBody:ElementRef;
  @Input("serverElement") element;
  @Input("name") name;
  
  constructor() { 
    console.log("constructor called ----");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes called....");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ng on init called ----");
    //@viewChild textContent is accesed only after view is loaded so it is called in ngAfterViewInit() hook
    console.log("ng on init called panel Header = "+this.panelHeader.nativeElement.textContent);
    //@contentChild textContent is accesed only after content is projected is loaded ngAfterContentInit hook
    console.log("ng on init called panel Body = "+this.panelBody.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ng do check called....");
  }

  // called only when the <ng-content></ng-content> tag used 
  // called before the projection of the content begins.
  // not called if we don't use <ng-content></ng-content> tag in the html 
  ngAfterContentInit(): void {
    console.log("ngAfterContent Init called ----");
    console.log("panel Body = "+this.panelBody.nativeElement.textContent);
    console.log(this.panelBody.nativeElement);
    console.log(this.panelBody);
  }

  // called once the content from the parent component is projected.
  ngAfterContentChecked(): void {
    console.log("ngAfterContent Checked called ----");
  }
   
  // If there is not  <ng-content></ng-content> tag used in the component's html
  // then ngAfterViewInit() is called after the ngDoCheck()
  // But if there is <ng-content></ng-content> tag then 
  // once the content in the <ng-content></ng-content> tag is projected and checked then the ngAfterViewInit() is called.
  // It is called before the view of the component is initailized 
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called ----");
    console.log("panel Header = "+this.panelHeader.nativeElement.textContent);
    console.log(this.panelHeader.nativeElement);
    console.log(this.panelHeader);
  }

  // It is called after the view of the component is loaded 
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called ----");
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy called ----");
  }
  

}
