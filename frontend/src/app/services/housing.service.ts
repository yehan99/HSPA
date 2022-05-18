import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { Iproperty } from '../property/iProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent: number): Observable<Iproperty[]>{
    return this.http.get('data/property.json').pipe(
      map(data => {
        const propertiesArray : Array<Iproperty> =[];
        for (const id in data){
          if(data.hasOwnProperty(id) &&data[id].SellRent === sellRent ){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray ;
      })
    )
  }
}
