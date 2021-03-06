import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import { CardPage } from '../card/card';
import {MapPage} from '../map/map'
import {MenuPage} from '../menu/menu'



@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private cardTab: any;
  // private mapTab: any;
  private menuTab: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    this.cardTab = CardPage;
    // this.mapTab = MapPage;
    this.menuTab = MenuPage;
  }
}
