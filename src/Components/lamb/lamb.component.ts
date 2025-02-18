import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.scss'
})
export class LambComponent implements OnInit {

  LambList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getLamb();
  }

  getLamb() {
    this.placeholder.getLamb().subscribe({
      next: (res) => {
        console.log(res)
        this.LambList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
