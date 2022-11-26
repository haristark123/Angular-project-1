import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit,OnDestroy {
  // @Output() newSelectedRecipe = new EventEmitter<Recipe>()
  recipes: any = [];
  subscription!:Subscription
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.setRecipes();
   this.subscription= this.recipeService.recipesSelect.subscribe((items) => {
      this.recipes = items;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onSelectedRecipe(item: Recipe) {
    // this.newSelectedRecipe.emit(item)
  }
  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
