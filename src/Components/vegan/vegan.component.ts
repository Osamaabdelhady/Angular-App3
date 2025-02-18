import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-vegan',
  imports: [],
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.scss'
})
export class VeganComponent implements OnInit {

  VeganList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getVegan();
  }

  getVegan() {
    this.placeholder.getVegan().subscribe({
      next: (res) => {
        console.log(res)
        this.VeganList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
