import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  saveData() {
    const recipes = this.recipeService.setRecipes();
    return this.http
      .put(
        'https://angular-recipe-project-79293-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchData() {
    return this.http.get<any>(
      'https://angular-recipe-project-79293-default-rtdb.firebaseio.com/recipes.json'
    ).pipe(map((data)=>{
      // console.log(data);
      return data.map((recipe:any)=>{
        return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]}
      })
      
    }),tap((recipes)=>{
      this.recipeService.fetchAndUpdateRecipes(recipes)
    }))
    // .subscribe((recipes)=>{
    //   // console.log(recipes);
    //   this.recipeService.fetchAndUpdateRecipes(recipes)
      
    // });
  }
}
