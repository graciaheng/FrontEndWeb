import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';

  //declare variables
  count: number = 0;
  show: boolean = false;

  //function occurs when button is clicked
  onButtonClick(){
    console.log('Button Clicked');
    this.count++;
  }

  onStarDBLClick(){
    //if DBL click again, the text should not appear
    if (this.show == true){
      this.show = false;
    }
    //else, text should appear
    else if (this.show == false){
      this.show = true;
    }
  }
}
