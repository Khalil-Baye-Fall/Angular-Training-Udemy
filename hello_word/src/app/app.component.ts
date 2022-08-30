import { Component } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello_word';

  isAuth = false;
  lastUpdate = new Date();

  appareils = [

    {
      name: "Television",
      status: "eteint"
    },
    {
      name: "Ordinateur",
      status: "allume",
    },

    {
      name: "Machine a laver",
      status: "eteint",
    },

    {
      name: "Phone",
      status: "allume",
    }


  ];
  constructor(){
    setTimeout(
      () => {this.isAuth = true;}, 4000
    )
  }

  onAllume(){
    console.log("On allume tout!")
  }
}
