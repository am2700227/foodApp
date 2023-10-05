import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foods[]{
    return [
      {
        id:1,
    price:300,
    name:'Burger',
    favorite:false,
    star:4.5,
    tags:['fast foods','pizza', 'lunch'],
    imageUrl:'/assets/burger.jpg',
    cookTime:'10-20',
    origins:['Italy']
      }
    ]
  }
}
