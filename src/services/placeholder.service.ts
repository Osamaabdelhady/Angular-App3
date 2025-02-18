import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http:HttpClient) { }

  getAllMeals():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }

  getBeef():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
  }

  getBreakFast():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
  }

  getChicken():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
  }

  getDessert():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
  }

  getGoat():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat')
  }

  getLamb():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb')
  }

  getMiscellaneous():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous')
  }

  getPasta():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta')
  }

  getPork():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
  }

  getSeafood():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  }


  getSide():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Side')
  }

  getStarter():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter')
  }

  getVegan():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan')
  }

  getVegetarian():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
  }
}
