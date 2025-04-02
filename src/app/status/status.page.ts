import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonRadio, IonRadioGroup, IonList, 
  IonItem, IonLabel, IonContent, IonHeader, 
  IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadio, IonRadioGroup, IonList, IonItem, 
    IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonButtons, IonBackButton]
})

export class StatusPage implements OnInit {
status:string = "";
  constructor(private storage:Storage, private router:Router) { 

  }

  async ionViewWillEnter(){
    //console.log("ionviewWillEnter");
    await this.storage.create();
    this.status = await this.storage.get('status');
  }

  async onButtonClick(){
    //console.log(this.status);
    await this.storage.create();
    await this.storage.set('status', this.status);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
