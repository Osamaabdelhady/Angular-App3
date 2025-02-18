import { Meals } from './../services/meals';
import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { Category } from '../services/category';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}
