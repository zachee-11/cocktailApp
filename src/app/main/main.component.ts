import { UntypedFormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    lastCocktail: string = 'No value'
    cocktails: Array<any> = new Array<any>()
    displayedCocktails: Array<any> = new Array<any>()
    formGroup: UntypedFormGroup
    searchControl: FormControl

    constructor(private route: ActivatedRoute) {
        this.searchControl = new FormControl<string>('')
        this.formGroup = new UntypedFormGroup(
        { search: this.searchControl }
    )
    }

    ngOnInit(): void {
        this.cocktails.push( { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: 'assets/mojito.jpg', alcool: true } )
        this.cocktails.push( { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: 'assets/cubalibre.jpg', alcool: true } )
        this.cocktails.push( { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: 'assets/margarita.jpg', alcool: true } )
        this.cocktails.push( { name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: 'assets/sexonthebeach.jpg', alcool: false } )
        this.cocktails.push( { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: 'assets/virginmojito.jpg', alcool: false } )

        this.route.paramMap.subscribe(
            (params) => this.displayedCocktails = this.cocktails.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

    submit() {
        let filter = this.searchControl.value
        this.displayedCocktails = this.cocktails.filter( el => filter ? el.name === filter : true )
    }
}
