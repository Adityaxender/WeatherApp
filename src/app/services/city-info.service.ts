import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CityInfoService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCityInfo = async () => {
    try {
        const response = await this.httpClient.get('assets/data/cities.json').toPromise();
        return response;
    } catch (error) {
        console.error(error);
    }
}
}
