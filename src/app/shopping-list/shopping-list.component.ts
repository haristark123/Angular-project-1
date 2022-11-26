import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredinet } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
 @Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  sub!:Subscription;

  ingredients: Ingredinet[] = []
  constructor(private shoppingService:ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getData()
   this.sub= this.shoppingService.newIngedient.subscribe((item:any)=>{
      this.ingredients = item
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  onAddIngredient(ingredient:any){
    this.ingredients.push(ingredient)
    
  }
  onEdit(index:any){
      this.shoppingService.startEdit.next(index)
  }
}
