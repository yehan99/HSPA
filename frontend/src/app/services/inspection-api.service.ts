import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7164/api" ;

  constructor( private http: HttpClient) { }

  // Inspection
  getInspectionList():Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data: any){
    return this.http.post(this.inspectionAPIUrl + '/inspections',data);
  }

  updateInspection(id:number| string, data: any){
    return this.http.put(this.inspectionAPIUrl + '/inspections/${id}', data);
  }

  deleteInspection(id: number|string){
    return this.http.delete(this.inspectionAPIUrl+'/inspections/${id');
  }

  // Inspection Types
  getInspectionTypeList():Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionType(data: any){
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes',data);
  }

  updateInspectionType(id:number| string, data: any){
    return this.http.put(this.inspectionAPIUrl + '/inspectionTypes/${id}', data);
  }

  deleteInspectionType(id: number|string){
    return this.http.delete(this.inspectionAPIUrl+'/inspectionTypes/${id');
  }

  // Status
  getStatusList():Observable<any>{
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data: any){
    return this.http.post(this.inspectionAPIUrl + '/status',data);
  }

  updateStatus(id:number| string, data: any){
    return this.http.put(this.inspectionAPIUrl + '/status/${id}', data);
  }

  deleteStatus(id: number|string){
    return this.http.delete(this.inspectionAPIUrl+'/status/${id');
  }
}
