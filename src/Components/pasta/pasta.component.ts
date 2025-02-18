import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent implements OnInit {

  PastaList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getPasta();
  }

  getPasta() {
    this.placeholder.getPasta().subscribe({
      next: (res) => {
        console.log(res)
        this.PastaList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
