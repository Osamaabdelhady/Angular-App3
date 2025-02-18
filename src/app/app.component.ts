import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assignment3';

 
}

