import { Component } from '@angular/core';
import { Cocktail } from '../cocktail-model';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {


  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  // initialization du composant et on s'abonne au flux de données de l'observable avec la méthode subscribe
  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe({
      next: (cocktails) => {
        this.cocktails = cocktails;
        console.log('Cocktails loaded:', cocktails);
      },
      error: (error) => {
        console.error('Error fetching cocktails:', error);
      }
    });
  }
}
