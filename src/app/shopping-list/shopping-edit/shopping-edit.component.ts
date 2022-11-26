import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredinet } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() onnewIngridient = new EventEmitter();
  @ViewChild('f', { static: false }) formData!: NgForm;
  subccription!: Subscription;
  editMode: boolean = false;
  editIndex: any;
  editedItem: any;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.subccription = this.shoppingService.startEdit.subscribe((index) => {
      this.editMode = true;
      this.editIndex = index;
      this.editedItem = this.shoppingService.getEditData(index);
      this.formData.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  // addTask(name:any,amount:any){
  //   const newIngridient = {name:name.value,amount:amount.value}
  //   console.log(newIngridient);
  //   this.shoppingService.addData(newIngridient)
  //   // this.onnewIngridient.emit(newIngridient)
  // }
  addTask(form: NgForm) {
    console.log(form.value);
    const data = form.value;
    if (this.editMode && data.name !== null && data.amount!==null) {
      this.shoppingService.updateIngredient(this.editIndex, {
        name: data.name,
        amount: data.amount,
      });
    } else {
      if (data.name !== null && data.amount!==null) {
        this.shoppingService.addData({ name: data.name, amount: data.amount });
      }
    }
    this.editMode = false;
    form.reset();
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.editIndex)
    this.onClear()
  }
  onClear() {
    this.formData.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subccription.unsubscribe();
  }
}
