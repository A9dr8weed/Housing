import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/IProperty';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private _http: HttpClient) {}

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    // дозволяє об'єднати кілька функцій в одну
    return this._http.get('data/properties.json').pipe(
      // дозволяє подати дані в функцію і повернути нові дані які автоматично обгорнуті до Observable
      map((data) => {
        const propertiesArray: Array<IProperty> = []; // для зберігання даних, які ми отримуємо від сервера

        for (const id in data) {
          // перевірка, чи властивість об'єкта власне його та чи властивість співапдає з переданим параметром
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]); // вставляємо кожен отриманий елемент, (id, щоб отримати одиничний елемент масиву)
          }
        }

        return propertiesArray;
      })
    );
  }

  addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
