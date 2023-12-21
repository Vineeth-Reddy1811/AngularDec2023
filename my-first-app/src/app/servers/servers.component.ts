import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName= "";
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  
  constructor() {
    setTimeout( () => { this.allowNewServer=true;},2000 );    //PropertyBinding
  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = " Server is created!";

  }
  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
}
}
