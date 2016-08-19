import {Component} from '@angular/core'

@Component({
    templateUrl:'build/pages/about/search.html'
})
export class SearchPage{
    private searchQuery: string;
    private items:string[];
    private beShow:boolean = false;
    private selectedString: string;
    constructor(){
        this.initialzeItems();
    }

    initialzeItems(){
            this.items = [
                'Amsterdam',
                'Bogota',
                'Tata',
                'Jianwu',
                'Microsoft Hei'
            ]
        }
    getItems(ev:any){
        console.log(ev.target.value);
        this.initialzeItems();
        let val = ev.target.value;
        if(val && val.trim()!=''){
            this.items = this.items.filter((item)=>{
                return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
            });
        }

    }
/**
 * 离开搜索
 */
    searchBlur(){
        console.log("blur");
        console.log(this.selectedString);
        this.beShow=false;
    }
    /**
     * 进入搜索
     */
    searchFocus(){
        console.log("focus");
        this.beShow=true;
    }

    changeSelectedString(){
        console.log("changeSelectedString");
    }
} 