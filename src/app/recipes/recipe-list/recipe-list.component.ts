import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('This is a test Recipe', 'Test Recipe Description', 'https://www.dominicancooking.com/wp-content/uploads/how-to-make-sancocho-step-by-step-6.jpg' ),
    new Recipe('This is a test Recipe', 'Test Recipe Description', 'https://www.dominicancooking.com/wp-content/uploads/how-to-make-sancocho-step-by-step-6.jpg' ),
    new Recipe('This is a test Recipe', 'Test Recipe Description', 'https://www.dominicancooking.com/wp-content/uploads/how-to-make-sancocho-step-by-step-6.jpg' ),
    new Recipe('This is a test Recipe', 'Test Recipe Description', 'https://www.dominicancooking.com/wp-content/uploads/how-to-make-sancocho-step-by-step-6.jpg' )
  ];
  ngOnInit() {
    
  }
}
