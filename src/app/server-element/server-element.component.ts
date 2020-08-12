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
  
  constructor() { 
    console.log("constructor called ----");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called ----");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called ----");
    console.log("panel Header = "+this.panelHeader.nativeElement.textContent);
    console.log(this.panelHeader.nativeElement);
    console.log(this.panelHeader);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called ----");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContent Checked called ----");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContent Init called ----");
    console.log("panel Body = "+this.panelBody.nativeElement.textContent);
    console.log(this.panelBody.nativeElement);
    console.log(this.panelBody);
  }
  ngDoCheck(): void {
    console.log("ng do check called....");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes called....");
    console.log(changes);
  }
  @Input("serverElement") element;
  @Input("name") name;
  ngOnInit(): void {
    console.log("ng on init called ----");
    //@viewChild textContent is accesed only after view is loaded so it is called in ngAfterViewInit() hook
    console.log("panel Header = "+this.panelHeader.nativeElement.textContent);
    //@contentChild textContent is accesed only after content is projected is loaded ngAfterContentInit hook
    console.log("panel Body = "+this.panelBody.nativeElement.textContent);
  }

}
