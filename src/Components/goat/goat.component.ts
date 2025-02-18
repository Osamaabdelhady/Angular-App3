import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-goat',
  imports: [],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.scss'
})
export class GoatComponent implements OnInit {

  GoatList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getGoat();
  }

  getGoat() {
    this.placeholder.getGoat().subscribe({
      next: (res) => {
        console.log(res)
        this.GoatList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
