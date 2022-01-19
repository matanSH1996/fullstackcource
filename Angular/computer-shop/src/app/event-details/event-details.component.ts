import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  event = {name: 'New Asus presentation', date: '3/1/2022', time: '10:00', location: {address:'23 Burla St', city: 'Haifa', country: 'Israel'}}

  title = 'our brand new company'

  events = [
    {name: 'New Asus presentation', date: '3/1/2022', time: '10:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : true},
    {name: 'New Gigabyte motherboard', date: '4/1/2022', time: '11:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : false},
    {name: 'AMD experience', date: '1/11/2022', time: '13:00', location: {street: '123 Lilach St', city: 'Tel-Aviv', country: 'Israel'}, registration : false},
    {name: 'G5 modeling', date: '6/5/2022', time: '9:00', location: {street: '1 Histadrut St', city: 'Ashdod', country: 'Israel'}, registration : true}
  ]

}
