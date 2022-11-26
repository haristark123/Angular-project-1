import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredinet } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  // newIngedient = new EventEmitter()
  newIngedient = new Subject();
  startEdit = new Subject();
  ingredients: Ingredinet[] = [
    {
      name: 'Apples',
      amount: 5,
    },
    {
      name: 'Tomatoes',
      amount: 5,
    },
    {
      name: 'Chillies',
      amount: 5,
    },
  ];

  constructor() {}

  getData() {
    return this.ingredients.slice();
  }
  getEditData(index: any) {
    return this.ingredients[index];
  }
  addData(item: any) {
    this.ingredients.push(item);
    // this.newIngedient.emit(this.ingredients.slice())
    this.newIngedient.next(this.ingredients.slice());
  }
  updateIngredient(index: any, item: any) {
    this.ingredients[index] = item;
    this.newIngedient.next(this.ingredients.slice());
  }
  addIngredients(item: any) {
    this.ingredients.push(...item);
    // this.newIngedient.emit(this.ingredients.slice())
    this.newIngedient.next(this.ingredients.slice());
  }
  deleteIngredient(index: any) {
    this.ingredients.splice(index, 1);
    this.newIngedient.next(this.ingredients.slice());
  }
}
