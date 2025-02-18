import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-seafood',
  imports: [],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.scss'
})
export class SeafoodComponent implements OnInit {

  SeafoodList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getSeafood();
  }


  getSeafood() {
    this.placeholder.getSeafood().subscribe({
      next: (res) => {
        console.log(res)
        this.SeafoodList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
