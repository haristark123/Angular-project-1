import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSeleted:any = new EventEmitter()
  recipesSelect = new Subject()

  // recipes: Recipe[] = [
  //   {
  //     id:0,
  //     name: 'A Test Reipe 1',
  //     description: 'Thus is Sample Test',
  //     imagePath: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
  //     ingredients:[{name:"Tomatoes",amount:'1'},{name:"Bread",amount:'1'}]

  //   },
  //   {
  //     id:1,
  //     name: 'A Test Reipe 2',
  //     description: 'Thus is Sample Test',
  //     imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtE1J5xVIO-adq-q1gHFVEfljYbyg9JU-XQ&usqp=CAU',
  //     ingredients:[{name:"Tomatoes",amount:'1'},{name:"Bread",amount:'1'}]

  //   },
  //   {
  //     id:2,
  //     name: 'A Test Reipe 3',
  //     description: 'Thus is Sample Test',
  //     imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zlj7_mb34Op_aY4M7VV_0ALR81nlEBDtAQ&usqp=CAU',
  //     ingredients:[{name:"Tomatoes",amount:'1'},{name:"Bread",amount:'1'}]

  //   },
  // ];

   recipes:any=[]

  constructor(private shoppingService:ShoppingService) { }

  setRecipes(){
    return this.recipes.slice()
  }
  getRecipe(id:any){
    return this.recipes[id]
  }
  addIngredients(item:any){
    this.shoppingService.addIngredients(item)
    this.recipesSelect.next(this.recipes.slice())

  }
  addRecipe(item:any){
    this.recipes.push(item)
    this.recipesSelect.next(this.recipes.slice())
  }
  updateRecipe(index:any,newRecipe:any){
    this.recipes[index] = newRecipe
    this.recipesSelect.next(this.recipes.slice())

  }
  deleteRecipe(index:any){
    this.recipes.splice(index,1)
    this.recipesSelect.next(this.recipes.slice())

  }
  fetchAndUpdateRecipes(recipes:any){
    this.recipes = recipes
    this.recipesSelect.next(this.recipes.slice())

  }
}
