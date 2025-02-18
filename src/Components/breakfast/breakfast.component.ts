import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss'
})
export class BreakfastComponent implements OnInit {

  BreakfastList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getBreakfast();
  }

  getBreakfast() {
    this.placeholder.getBreakFast().subscribe({
      next: (res) => {
        console.log(res)
        this.BreakfastList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
