import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  pokemonId: string | null = null;
  pokemon: any = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = params.get('id');

      if (this.pokemonId) {
        this.pokemonService.listById(this.pokemonId)
          .subscribe({
            next: (data) => {
              this.pokemon = data;
              this.loading = false;
            },
            error: (err) => {
              this.error = 'Erro ao carregar os detalhes do Pokémon';
              this.loading = false;
            },
        });
      }
    });
  }
}
