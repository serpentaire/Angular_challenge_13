import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  public formGroup!: FormGroup;
  public inValidate = false;
  constructor(public pokemons: PokedexService, private _fb: FormBuilder) {}
  get pokemon() {return this.pokemons.getPokemon()}

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      nom: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })

  }
  handleValidate() {
    this.inValidate = true
  }

  onSubmit() {
    this.pokemon.push(this.formGroup.value);
    console.log(this.pokemon);
  }

}
