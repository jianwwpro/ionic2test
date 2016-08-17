import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})


export class HomePage {
  constructor(private navCtrl: NavController) {
  	console.log(navCtrl);
  }
 onPageWillLoad(){
  	console.log("view will load");
  }
  onPageDidLoad(){
  	console.log("view did load");
  }
  onPageWillEnter(){
  	console.log("view will enter")
  }
  onPageDidEnter(){
  	console.log("view did enter");
  }

  onPageWillLeave(){
  	console.log("view will leave");
  }
  onPageDidLeave(){
  	console.log("view did leave");
  }
  onPageWillUnload(){
  	console.log('view will unload');
  }
  onPageDidUnload(){
  	console.log("view did unload");
  }
}
