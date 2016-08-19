import {Component} from '@angular/core'

@Component({
    templateUrl:"build/pages/about/segment.html"
})
export class SegmentPage{
    private pet:string;
    private dog:Object[];
    private cat:Object[];
    constructor(){
       this.initialDog();
    }

    initialDog(){
        this.pet="dog";
        this.dog = [
            {
                name:'旺财',
                img:'img/dog.jpg'
            },
            {
                name:'奥迪',
                img:'img/dog.jpg'
            },
            {
                name:'金毛',
                img:'img/dog.jpg'
            }

        ]
    }
     initialCat(){
        this.pet="cat";
        this.cat = [
            {
                name:'Kitty',
                img:'img/cat.jpeg'
            },
            {
                name:'叮当',
                img:'img/cat.jpeg'
            },
            {
                name:'加菲',
                img:'img/cat.jpeg'
            }

        ]
    }

    changeSegment(){
        if(this.pet=='dog'){
            this.initialDog();
        }
        else if(this.pet=='cat'){
            this.initialCat();
        }
    }
}