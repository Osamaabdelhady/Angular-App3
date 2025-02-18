import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-side',
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss'
})
export class SideComponent implements OnInit {

  SideList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getSide();
  }

  getSide() {
    this.placeholder.getSide().subscribe({
      next: (res) => {
        console.log(res)
        this.SideList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
