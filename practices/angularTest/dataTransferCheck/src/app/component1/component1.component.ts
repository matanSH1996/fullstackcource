import { Component, OnInit, Input } from '@angular/core';
import { SiblingComponentServiceService } from '../sibling-component-service.service';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  // @Input() thisMessage: string;

  constructor(public siblingComponentService: SiblingComponentServiceService) { }

  ngOnInit(): void {
  }
  
  user = {
    name:'matan',
    lastName: 'shtern',
    age: 25,
    pic: "https://www.birthdaywishes.expert/wp-content/uploads/2015/01/success-quotes-7.jpg"
  }

  change(): void{
    this.user.pic = "https://inspiringwishes.com/wp-content/uploads/2020/03/Inspirational-Quotes-on-Life-Struggle.jpg"  
  }

  chageName(): void{
    this.user.name = 'liran levi'
  }
}
