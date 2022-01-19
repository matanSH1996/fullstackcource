import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'computer-shop';

  computerProvider : string = 'asus';
  typeOfMotherBoard : string = 'intel';
  modelNumber : number = 1000;
}
