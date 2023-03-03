import { Component } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  pokemonSelected!: string;
  pokemonDetail: any = [];
  constructor(public pokemons: PokedexService) {}

  ngOnInit(): void {
  }
get pokemon() {return this.pokemons.getPokemon()}

onGetPokemon(event : string): void {
  this.pokemonSelected = event;
  this.pokemonDetail=[]
  this.pokemonDetail.push(this.pokemon.find((poke: any) => poke.nom === this.pokemonSelected))
}


}


