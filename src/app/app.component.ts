import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:any = [];

  serverCreated(server:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    });
  }

  bluePrintCreated(server:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.serverName,
      content: server.serverContent
    });
  }
  changeNameOfFirstElement(event){
    this.serverElements[0].name = "changed Name !!";
  }
  destroyFirstElement(event){
    this.serverElements.splice(0,1);
  }
}
