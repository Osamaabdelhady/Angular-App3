import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-pork',
  imports: [],
  templateUrl: './pork.component.html',
  styleUrl: './pork.component.scss'
})
export class PorkComponent implements OnInit {

  PorkList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getPork();
  }


  getPork() {
    this.placeholder.getPork().subscribe({
      next: (res) => {
        console.log(res)
        this.PorkList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
