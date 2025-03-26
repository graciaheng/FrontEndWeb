import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  myMovies:any[] = []; //declares array
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): void { //upon initialising component
    this.movieService.getMovieData().subscribe( //get data
      (data)=>{
        this.myMovies = data.Search; //put into array
        //console.log(data);
      }
    );
  }
}
