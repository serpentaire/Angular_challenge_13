import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
@Input() pokemon: any

@Output() selectedPokemon: EventEmitter<string> = new EventEmitter();

selectPokemon(nom:string) {
this.selectedPokemon.emit(nom);
}

}
