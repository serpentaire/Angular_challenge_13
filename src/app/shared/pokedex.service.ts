import { Injectable } from '@angular/core';
import { Pokemons } from './pokemons-mock';

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  constructor() { }
  public getPokemon() {
    return Pokemons;
  }

}

