import { Component } from '@angular/core'
import { App,MenuController } from 'ionic-angular'

@Component({
    templateUrl:'build/pages/menu/menu.html'
})

export class MenuPage{
    // static get parameters(){
    //     return [[
    //         App,MenuController
    //     ]];
    // }
    constructor(app: App,menu: MenuController){
        menu.enable(true);
    }
}

@Component({
    templateUrl:'build/pages/menu/friends.html'
})
export class FriendsPage{}