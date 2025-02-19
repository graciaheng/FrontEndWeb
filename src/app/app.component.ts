import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import the new components
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-app';
  //declare variables for databinding
  name: string = "Gracia";
  age: number = 20;
}
