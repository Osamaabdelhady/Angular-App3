import { Component, OnInit } from '@angular/core';
import { Meals } from '../../services/meals';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit {

  DataList: Meals[] = [];

  constructor(private placeholder: PlaceholderService) { }


  ngOnInit(): void {
    this.getAllMeals();
  }

  getAllMeals() {
    this.placeholder.getAllMeals().subscribe({
      next: (res) => {
        console.log(res)
        this.DataList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
