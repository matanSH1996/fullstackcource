import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {

  @Input() address? : any
  
  constructor() { }

  ngOnInit(): void {
  }
//  streetName: string ='23 Burla St';
// city: string = 'Haifa';
//  country: string = 'Israel';
}
