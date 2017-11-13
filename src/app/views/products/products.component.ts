import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'gama-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.less'],
    encapsulation: ViewEncapsulation.Native
})
export class ProductsComponent implements OnInit {

    public categories: Array<any> = [
        {
            name: 'Védőeszköz'
        },
        {
            name: 'Munkaruha'
        },
        {
            name: 'Védőlábbelik'
        },
        {
            name: 'Military ruházat'
        },
        {
            name: 'Gázfegyverek'
        },
        {
            name: 'Légpuskák'
        },
        {
            name: 'Lőszerek'
        },
        {
            name: 'Vadászruházat'
        },
        {
            name: 'Bakancsok'
        },
        {
            name: 'Övek'
        },
        {
            name: 'Ajándéktárgyak'
        },
        {
            name: 'Egyéb'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
