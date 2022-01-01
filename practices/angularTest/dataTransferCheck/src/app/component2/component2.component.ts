import { Component, OnInit, Input } from '@angular/core';
import { SiblingComponentServiceService } from '../sibling-component-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(public siblingComponentService: SiblingComponentServiceService) { }

  ngOnInit(): void {
  }

  isDisplay = true;

  toggle(): void{
    this.isDisplay = !this.isDisplay;
  }
}
