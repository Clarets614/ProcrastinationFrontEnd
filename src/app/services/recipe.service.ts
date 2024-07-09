import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getRecipes():Observable<RecipeModel[]>{
    return this.http.get<RecipeModel[]>(`https://api.sampleapis.com/recipes/recipes`)
  }
}
