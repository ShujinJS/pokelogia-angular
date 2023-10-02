import { GetPokemonsModel } from './../models/request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { requestConstants } from './constants.helper';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn: "root"
})

export class RequestHelper {
    baseUrl =  requestConstants.allPokemons
    params = '?offset=00&limit=20'
    pokemons: Pokemon[] = [];

    constructor(
        private http: HttpClient,

    ){

    }

    getPokemons(offset?: string, limit?: string): Observable<GetPokemonsModel> {
        let requestUrl = `${this.baseUrl}`
        if(offset || limit) requestUrl = `${this.baseUrl}?offset=${offset}&limit=${limit}`
        
        return this.http.get<GetPokemonsModel>(requestUrl)
    }
}