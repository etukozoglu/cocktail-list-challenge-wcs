import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail-model';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {


  constructor(private http: HttpClient) { }

  // envoie une requête http à mon serveur local  pour récupérer la liste des cocktails
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("/assets/cocktails.json");
  }

  //une fois les données réceptionnées, la réponse du serveur sous forme d'un objet de type "Observable"

}
