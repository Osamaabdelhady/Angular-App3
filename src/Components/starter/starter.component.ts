import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-starter',
  imports: [],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss'
})
export class StarterComponent implements OnInit {

  StarterList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getStarter();
  }

  getStarter() {
    this.placeholder.getStarter().subscribe({
      next: (res) => {
        console.log(res)
        this.StarterList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
