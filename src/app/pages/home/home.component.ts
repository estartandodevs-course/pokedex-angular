import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/Pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.listAll().subscribe({
      next: (data) => {
        this.pokemonList = data;
      },
      error: (error) => {
        this.pokemonList = [];
      },
    });
  }

  getPokemonColor(index: number): string {
    const colors = [
      '#A8E6CF',
      '#FFD3B6',
      '#FF8B94',
      '#FFAAA5',
      '#D1F2A5',
      '#FFC3A0',
      '#FF9AA2',
      '#FFDAC1',
      '#B5EAD7',
    ];
    return colors[index % colors.length];
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
