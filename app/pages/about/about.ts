import {Component} from '@angular/core';
import {PopoverController, ViewController,NavController, ActionSheetController, AlertController, ModalController} from 'ionic-angular';
import { PopoverPage,PopoverHomePage } from './popover'
import {SearchPage} from './search'
import {SegmentPage} from './segment'
@Component({
  templateUrl: 'build/pages/about/about.html'
})

export class AboutPage {


  private testRadioOpen : any;
  private testReadioResult : any;

  

  constructor(private actionSheetController: ActionSheetController,private alertController: AlertController,private modalController: ModalController,private popoverController: PopoverController,private navController:NavController) {
    console.log("class load");
    
  }
  onPageWillEnter(){
    console.log("page will load");
  }
  presentSearch(){
    this.navController.push(SearchPage);
  }
    presentSegment(){
    this.navController.push(SegmentPage);
  }


  /**
   * 打开Action Sheet
   */
  presentActionSheet(){
    let actionSheet = this.actionSheetController.create({
      title:"Action Sheet",
      buttons:[
        //Destructive模式
        {
          text:'Destructive',
          role:'destructive',
          handler:()=>{
            console.log("Descructive被点击");
          }
        },{
          text:'Archive',
          hander:()=>{
            console.log("Archive被点击");
          }
        },{
          text:'Cancel',
          role:'Cancel',
          hander:()=>{
            console.log("Cancel 被点击");
          }
        }
      ]
    });
    actionSheet.present();
    console.log(actionSheet);
    console.log("actionSheet open");
  }
  
/**
 * 弹出基础alert
 */
  basicAlert(){
    let basicAlert = this.alertController.create({
      title:'New Friend!',
      subTitle:'You friend, Obi wan Kenbi,just accept your friend request!',
      buttons:['OK','View']
    });
    basicAlert.present();
  }

  showPrompt(){
    let prompt = this.alertController.create({
      title:'Login',
      message:'Enter a name for this new album you\'re so keen on adding',
      inputs:[
        {
          name:'title',
          placeholder:'Title'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          hander:data=>{
            console.log('Cancel clicked');
          }
        },{
          text:'save',
          hander:data=>{
            console.log("saved clicked");
          }
        }
      ]
    });
    prompt.present();
  }
/**
 * radio 弹出
 */
  showRadioAlert(){
    
    let radioAlert = this.alertController.create();
    radioAlert.setTitle("Lightsaber color");
    radioAlert.addInput({
      type:'radio',
      label:'Blue',
      value:'blue',
      checked:true
    });
    radioAlert.addInput({
      type:'radio',
      label:'Green',
      value:'green'
    });
    radioAlert.addButton("Cancel");
    radioAlert.addButton({
      text:'OK',
      hander: data => {
        this.testRadioOpen = false;
        this.testReadioResult = data;
      }
    });
    radioAlert.present();

  }


/**
 * 打开modal框
 */
  showModal(){
      let modalController = this.modalController.create(ModalPage);
      modalController.present();
  }
  /**
   * 弹出层设置字体，颜色等内容
   */
  presentPopover(e){
    let popover = this.navController.push(PopoverHomePage)
    
  }
   /**
   * 弹出层设置字体，颜色等内容
   */
  tempPop(e){
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev:e
    })
    
  }
}


@Component({
  templateUrl:'build/pages/about/modal-page.html'
})
export class ModalPage{
  constructor(private view: ViewController){

  }
  dismiss(){
    this.view.dismiss();
  }
}