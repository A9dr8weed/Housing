import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUsers(user: IUser) {
    let users = [];

    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')); // конвертація стрічки до JSON об'єкта
      users = [user, ...users]; // дозволяє елементам масиву розширюватися
    } else {
      users = [user];
    }

    localStorage.setItem('Users', JSON.stringify(users)); // збереження в локальному сховищі браузера, конвертація до стрічки
  }

}
