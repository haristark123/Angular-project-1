import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated // None, 
})
export class AppComponent {
  title = 'angular-project1';
  selected = 'recipe'
  onNavigation(task:string){
    console.log(task);
    this.selected = task
    
  }
}
