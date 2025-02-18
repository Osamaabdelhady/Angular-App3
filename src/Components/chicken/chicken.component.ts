import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent implements OnInit {

  ChickenList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getChicken();
  }

  getChicken() {
    this.placeholder.getChicken().subscribe({
      next: (res) => {
        console.log(res)
        this.ChickenList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
