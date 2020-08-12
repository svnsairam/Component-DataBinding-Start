import { Component, OnInit,EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output("addedServer") addedServer = new EventEmitter<{serverName:string, serverContent:string}>(); 
  @Output("addedBPServer") addedBPServer = new EventEmitter<{serverName:string, serverContent:string}>(); 
  @ViewChild('serverContentInputElement',{static: true}) serverContentRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  // newServerName = '';
  // newServerContent = '';
  onAddServer(nameInput:HTMLInputElement){

    console.log(nameInput);
    console.log(nameInput.value);
    this.addedServer.emit({
      serverName : nameInput.value, // this contains value present in the input i.e value we enter into the input field
      serverContent : this.serverContentRef.nativeElement.value
    });
  }
  onAddBlueprint(nameInput:HTMLInputElement){
    console.log(this.serverContentRef);
    console.log(nameInput);
    this.addedBPServer.emit({
      serverName : nameInput.value,
      serverContent : this.serverContentRef.nativeElement.value
    });
  }
}
