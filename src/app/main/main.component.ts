import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    cocktails: Array<any> = new Array<any>()

    constructor() { }

    ngOnInit(): void {
        this.cocktails.push( { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', alcool: true } )
        this.cocktails.push( { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', alcool: true } )
        this.cocktails.push( { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', alcool: true } )
        this.cocktails.push( { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', alcool: false } )
    }

}
