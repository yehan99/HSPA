import { InspectionApiService } from './../../services/inspection-api.service';
import { Component, Input , OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-inspection',
  templateUrl: './new-inspection.component.html',
  styleUrls: ['./new-inspection.component.scss']
})
export class NewInspectionComponent implements OnInit {

  inspectionTypeList$! : Observable<any[]>;
  statusList$ : Observable<any[]>;
  inspectionList$! : Observable<any[]>;

  constructor( private service : InspectionApiService) { }

  // Variables
  modelHeading : string = 'Add new inspection';
  activateAddEditInspectionComponent : boolean = false ;
  inspection: any ;


  @Input()
  id: number =0 ;
  status : string = '' ;
  comment: string = '' ;
  inspectionTypeId : string = '' ;


  ngOnInit(): void {
    this.id = this.inspection.id ;
    this.status = this.inspection.status ;
    this.comment = this.inspection.comment ;
    this.inspectionTypeId = this.inspectionTypeId ;
    this.statusList$ = this.service.getStatusList() ;
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypeList$ = this.service.getInspectionTypeList() ;
  }

  types = [ {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}];

}
