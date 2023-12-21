import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string; serverContent:string}>();
  @Output()  blueprintCreated= new EventEmitter<{serverName:string; serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static :true})serverContentInput : ElementRef;

  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({     //This emmits the serverCreated event with the data
      serverName:nameInput.value,              
       serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({//This emmits the blueprintCreated event with the data
      serverName: nameInput.value,
       serverContent:this.serverContentInput.nativeElement.value});
  }
}

