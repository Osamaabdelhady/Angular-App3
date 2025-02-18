import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-dessert',
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.scss'
})
export class DessertComponent implements OnInit {

  DessertList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getDessert();
  }

  getDessert() {
    this.placeholder.getDessert().subscribe({
      next: (res) => {
        console.log(res)
        this.DessertList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
