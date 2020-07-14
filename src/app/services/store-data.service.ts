import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  constructor() { }

  setCityInfo(data: any) {
    localStorage.setItem('cityList', JSON.stringify(data));
  }

   getCityInfo() {
    return localStorage.getItem('cityList');
  }
}
