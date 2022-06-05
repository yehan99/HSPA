import { InspectionApiService } from './../services/inspection-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspection-type-dialog',
  templateUrl: './inspection-type-dialog.component.html',
  styleUrls: ['./inspection-type-dialog.component.scss']
})
export class InspectionTypeDialogComponent implements OnInit {

  inspectionTypeList$: Observable<any[]>;
  inspectionTypeList: any =[] ;

   // Map to Display data associate with foriegn keys
   InspectionTypeMap: Map<number, string> =new Map()
  constructor(private service : InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionTypeList$ = this.service.getInspectionTypeList();
  }

}
