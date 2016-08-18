import {Component,ViewChild} from '@angular/core';
import {Platform, ionicBootstrap,NavController,Menu} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {FriendsPage} from './pages/menu/menu'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;
  @ViewChild('content') content:NavController;
  @ViewChild(Menu) menu: Menu;
  pages = [
    {title:'Friends',component: FriendsPage}
  ];

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
