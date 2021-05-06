import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailResolverService implements Resolve<Property> {
  constructor(
    private _router: Router,
    private _housingService: HousingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Property> | Property {
    const propId = route.params['id'];

    return this._housingService.getProperty(+propId).pipe(
      catchError((error) => {
        this._router.navigate(['/']);

        return of(null);
      })
    );
  }
}
