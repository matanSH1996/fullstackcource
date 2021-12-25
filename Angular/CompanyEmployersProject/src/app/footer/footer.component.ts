import { Component, OnInit } from '@angular/core';
import { SocialButton } from '../socialMediaButton';
import {SOCIALMEDIABUTTONS} from '../list-socialButtons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  copyrights = "Matan Shtern"
  listOfSocialButtons = SOCIALMEDIABUTTONS;
  copyrightYear = "2021" 
}