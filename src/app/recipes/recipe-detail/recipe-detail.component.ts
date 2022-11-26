import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  open = false;
  // @Input() recipe: any
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  recipe: any;
  id: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  setOPen() {
    this.open = !this.open;
  }
  shopTo(ingredients: any) {
    this.recipeService.addIngredients(ingredients);
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'])
  }
  goToEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
