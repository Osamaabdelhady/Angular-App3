import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-miscellaneous',
  imports: [],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent implements OnInit {

  MiscellaneousList: Category[] = [];

  constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getMiscellaneous();
  }


  getMiscellaneous() {
    this.placeholder.getMiscellaneous().subscribe({
      next: (res) => {
        console.log(res)
        this.MiscellaneousList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



}
