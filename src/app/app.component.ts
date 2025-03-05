import { Component, OnInit } from '@angular/core'; //added OnInit for implementation
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service'; //import the data service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  //declare arrays
  students:any[] = []; 
  weather:any[] = [];
  temperature:any = "";
  constructor(private dataService:DataService){

  }

  ngOnInit(): void {
    this.dataService.getStudentData().subscribe(
      (data)=>{
        this.students = data.students; //get data from student array
      }
    ); 
    this.dataService.getWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather; //get weather from student array
        this.temperature = (data.main.temp - 273.15).toFixed(2); //get temperature data from "temp"
      }
    );
  }

}
