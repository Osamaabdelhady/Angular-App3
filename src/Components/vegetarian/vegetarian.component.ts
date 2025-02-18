import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-vegetarian',
  imports: [],
  templateUrl: './vegetarian.component.html',
  styleUrl: './vegetarian.component.scss'
})
export class VegetarianComponent implements OnInit {

  vegetarianList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getVegetarian();
  }

  getVegetarian() {
    this.placeholder.getVegetarian().subscribe({
      next: (res) => {
        console.log(res)
        this.vegetarianList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
