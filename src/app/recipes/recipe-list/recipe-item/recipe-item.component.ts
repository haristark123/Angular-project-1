import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output() selectedRecipe = new EventEmitter<void>()

  @Input() recipe : Recipe = {}
  @Input() index:any

  constructor(private recieService:RecipeService) { }

  ngOnInit(): void {
  }
  
  recipeSelected(){
    // this.selectedRecipe.emit()
    this.recieService.recipeSeleted.emit(this.recipe)
  
  }
}
