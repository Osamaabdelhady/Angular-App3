import { Routes } from '@angular/router';
import { AllComponent } from '../Components/all/all.component';
import { BeefComponent } from '../Components/beef/beef.component';
import { BreakfastComponent } from '../Components/breakfast/breakfast.component';
import { DessertComponent } from '../Components/dessert/dessert.component';
import { GoatComponent } from '../Components/goat/goat.component';
import { LambComponent } from '../Components/lamb/lamb.component';
import { MiscellaneousComponent } from '../Components/miscellaneous/miscellaneous.component';
import { PastaComponent } from '../Components/pasta/pasta.component';
import { PorkComponent } from '../Components/pork/pork.component';
import { SeafoodComponent } from '../Components/seafood/seafood.component';
import { SideComponent } from '../Components/side/side.component';
import { StarterComponent } from '../Components/starter/starter.component';
import { VeganComponent } from '../Components/vegan/vegan.component';
import { VegetarianComponent } from '../Components/vegetarian/vegetarian.component';
import { ChickenComponent } from '../Components/chicken/chicken.component';

export const routes: Routes = [
    {path:'',redirectTo:'all',pathMatch:"full"},
    {path:'all',component:AllComponent},
    {path:'beef',component:BeefComponent},
    {path:'breakfast',component:BreakfastComponent},
    {path:'chicken',component:ChickenComponent},
    {path:'dessert',component:DessertComponent},
    {path:'goat',component:GoatComponent},
    {path:'lamb',component:LambComponent},
    {path:'miscellaneous',component:MiscellaneousComponent},
    {path:'pasta',component:PastaComponent},
    {path:'pork',component:PorkComponent},
    {path:'seafood',component:SeafoodComponent},
    {path:'side',component:SideComponent},
    {path:'starter',component:StarterComponent},
    {path:'vegan',component:VeganComponent},
    {path:'vegetarian',component:VegetarianComponent},
];
