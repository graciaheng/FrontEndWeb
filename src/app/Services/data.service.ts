import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  getStudentData():Observable<any>{
    //get data from the student data api
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1346788280112439296');
  }

  getWeatherData():Observable<any>{
    //get weather data from the api
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
  
}
