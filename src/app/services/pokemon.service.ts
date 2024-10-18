import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

interface PokemonListResponse {
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  listAll() {
    return this.http
      .get<PokemonListResponse>(this.apiUrl, { params: { limit: 151 } })
      .pipe(map((value) => value.results));
  }

  listById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}/`);
  }
}
