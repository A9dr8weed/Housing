import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private _http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this._http.get('data/properties.json').pipe( // дозволяє об'єднати кілька функцій в одну
      map(data => { // дозволяє подати дані в функцію і повернути нові дані які автоматично обгорнуті до Observable
        const propertiesArray: Array<IProperty> = []; // для зберігання даних, які ми отримуємо від сервера

        for(const id in data) {
          // перевірка, чи властивість об'єкта власне його та чи властивість співапдає з переданим параметром
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]); // вставляємо кожен отриманий елемент, (id, щоб отримати одиничний елемент масиву)
          }
        }

        return propertiesArray;
      })
    );
  }
}
