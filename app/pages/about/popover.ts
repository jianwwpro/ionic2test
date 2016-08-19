import { Component,ViewChild,ElementRef} from '@angular/core'
import { NavParams, PopoverController} from 'ionic-angular'
@Component({
    templateUrl:'build/pages/about/popover.html'
})
export class PopoverPage{
    background: string;
    contentEle: any;
    textEle: any;
    fontFamily;
    fontSize:Number = 14;

    colors = {
        'white':{
            'bg':'rgb(255,255,255)',
            'fg':'rgb(0,0,0)'
        },
        'tan':{
            'bg':'rgb(249,241,228)',
            'fg':'rgb(0,0,0)'
        },
        'grey':{
            'bg':'rgb(76,75,80)',
            'fg':'rgb(255,255,255)'
        },
        'black':{
            'bg':'rgb(0,0,0)',
            'fg':'rgb(255,255,255)'
        },
    }

    constructor(private navParams: NavParams){

    }
    ngOnInit(){
        console.log("初始化");
        if(this.navParams.data){
            this.contentEle= this.navParams.data.contentEle;
            this.textEle=this.navParams.data.textEle;

            this.background=this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();            
        }
    }
/**
 * 获取颜色代号
 */
    getColorName(background){
        let colorName = 'white';

        if(!background) return "white";

        for(var key in this.colors){
            if(this.colors[key].bg == background){
                colorName = key;
            }
        }
        return colorName;
    }
/**
 * 设置字体
 */
    setFontFamily(){
        console.log("setFamily:"+this.textEle.style.fontFamily.replace(/'/g,""));
        if(this.textEle.style.fontFamily){
            console.log("fa");
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g,"");
        }
    }
/**
 * 改变字体
 */
    changeFontFamily(){
        console.log("changeFamily:"+this.fontFamily);
        if(this.fontFamily) this.textEle.style.fontFamily=this.fontFamily;
    }
    /**
     * 字体大小
     */
    changeFontSize(direction){
        this.textEle.style.fontSize=direction;
    }
    changeFontSizeByRange(){
        this.textEle.style.fontSize=this.fontSize+"px";
    }
    
    /**
     * 改变背景色
     */
    changeBackground(color){
        this.background = color;
        this.contentEle.style.backgroundColor=this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    }

}



@Component({
    templateUrl:'build/pages/about/popoverHome.html'
})
export class PopoverHomePage{
    @ViewChild('popoverContent',{read:ElementRef}) content:ElementRef;//内容总div
    @ViewChild('popoverText',{read:ElementRef}) text: ElementRef;//写字部分

    constructor(private popoverController: PopoverController){
        
    }

    presentPopover(e){
        let popover = this.popoverController.create(PopoverPage,{
            contentEle:this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev:e
        });

    }
}