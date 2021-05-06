import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../model/Property';
import { IPropertyBase } from '../model/IPropertyBase';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private _http: HttpClient) {}

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map((propertiesArray) => {
        return propertiesArray.find((p) => p.Id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<IPropertyBase[]> {
    // дозволяє об'єднати кілька функцій в одну
    return this._http.get('data/properties.json').pipe(
      // дозволяє подати дані в функцію і повернути нові дані які автоматично обгорнуті до Observable
      map((data) => {
        const propertiesArray: Array<IPropertyBase> = []; // для зберігання даних, які ми отримуємо від сервера
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        // Якщо містить якесь значення
        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
              // перевірка, чи властивість об'єкта власне його та чи властивість співапдає з переданим параметром
              if (
                localProperties.hasOwnProperty(id) &&
                localProperties[id].SellRent === SellRent
              ) {
                propertiesArray.push(localProperties[id]); // вставляємо кожен отриманий елемент, (id, щоб отримати одиничний елемент масиву)
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (SellRent) {
            // перевірка, чи властивість об'єкта власне його та чи властивість співапдає з переданим параметром
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]); // вставляємо кожен отриманий елемент, (id, щоб отримати одиничний елемент масиву)
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }

  addProperty(property: Property) {
    let newProp = [property];

    // Додати новий будинок в масив, якщо такий ключ існує у локальному сховищі
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropId() {
    // Перевіряємо чи міститься такий ключ і якщо міститься
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1)); // збільшуємо його значення на 1

      // повертаємо значення
      return +localStorage.getItem('PID');
    } else {
      // якщо такого ID немає додати новий елемент в сховище з ключем '101'
      localStorage.setItem('PID', '101');

      return 101;
    }
  }
}
