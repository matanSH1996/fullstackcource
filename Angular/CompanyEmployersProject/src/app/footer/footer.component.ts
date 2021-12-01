import { Component, OnInit } from '@angular/core';
import { SocialButton } from './socialMediaButton';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook : SocialButton = {
    name : 'facebook',
    URL : 'https://www.facebook.com/matan.shteren.31/',
    Icon :'-',
  }

  github : SocialButton = {
    name : 'github',
    URL : 'https://github.com/matanSH1996/fullstackcource.git',
    Icon :'-',
  }

  linkedin : SocialButton = {
    name : 'linkedin',
    URL : 'www.linkedin.com/in/matanshtern',
    Icon :'-',
  }

  email : SocialButton = {
    name : 'email',
    URL : 'matan.shtern2@gmail.com',
    Icon :'-',
  }
  
  whatsapp : SocialButton = {
    name : 'whatsapp',
    URL : 'https://web.whatsapp.com/',
    Icon :'-',
  }
}