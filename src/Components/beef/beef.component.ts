import { Component, OnInit } from '@angular/core';
import { Category } from '../../services/category';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-beef',
  imports: [],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.scss'
})
export class BeefComponent implements OnInit{
  
    BeefList:Category[]=[];

      constructor(private placeholder: PlaceholderService) { }

  ngOnInit(): void {
    this.getBeef();
  }
    
   getBeef() {
    this.placeholder.getBeef().subscribe({
      next: (res) => {
        console.log(res)
        this.BeefList = res.meals;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
