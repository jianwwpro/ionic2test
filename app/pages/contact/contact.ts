import {Component} from '@angular/core';
import {NavController, LoadingController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  private cantactList : Array<{}>;

  constructor(private navCtrl: NavController,private loading : LoadingController) {
    this.cantactList = [];
  }

  ionViewLoaded() {
    console.log("I'm alive!");
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }


  ionViewDidEnter(){
    
    let resultList = this.cantactList;
    let loading = this.loading.create({
      spinner:'ios'
    });
    loading.present();
    
    setTimeout(function() {
      for(var i=0;i<100;i++){
        if(i<10)
          resultList.push({name:'王建武'+i,isFollow:true,text:'太阳当空照，花儿对我笑'});
        else 
          resultList.push({name:'王建武'+i,isFollow:false,text:'日照香炉生紫烟，遥看瀑布挂前川'});
      }
      
      loading.dismiss()
    },  200);
  }
  
  openCantactDetail(contact){
    this.navCtrl.push(ContactDetailPage,contact);
  }
  
}


@Component({
  templateUrl:'build/pages/contact/contactDetail.html'
})
export class ContactDetailPage{
  private contact: any;
  constructor(private navParam : NavParams){
    console.log(this.navParam);
    this.contact=this.navParam.data;
  }

}