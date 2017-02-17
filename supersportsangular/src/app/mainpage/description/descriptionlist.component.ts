import { Component, OnInit } from '@angular/core';
import { IShoes } from './descriptionrules';    //the name of the data
import { SHOEDATA } from './data';            //the data itself

@Component({
    selector: 'descriptionlist',
    templateUrl: 'app/mainpage/description/descriptionlist.component.html'
})

export class ShoelistComponent implements OnInit{
    shoes:IShoes[];

    ngOnInit(){
        this.shoes = SHOEDATA;
    }

}


