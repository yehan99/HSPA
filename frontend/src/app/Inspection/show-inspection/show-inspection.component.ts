import { InspectionApiService } from 'src/app/services/inspection-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionType } from 'src/app/Models/InspectionType.model';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.scss'],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$: Observable<any[]>;
  inspectionTypeList$: Observable<any[]>;
  inspectionTypeList: any = [];
  statusList$ : Observable<any[]>;

  inspecType : InspectionType ;

  // Variables
  modelHeading: string = 'Add new inspection';
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;
  addInspectionForm: FormGroup ;
  addInspectionTypeForm: FormGroup ;

  // Map to Display data associate with foriegn keys
  InspectionTypeMap: Map<number, string> = new Map();

  constructor(
    private inspectionService: InspectionApiService,
    private fb: FormBuilder,

  ) {}

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionService.getInspectionList();
    this.inspectionTypeList$ = this.inspectionService.getInspectionTypeList() ;
    this.statusList$ = this.inspectionService.getStatusList() ;
    this.createForm();
    this.createInspectionTypeForm()
  }

 createForm() : void{
   this.addInspectionForm  = this.fb.group({
    InspectType : [null],
     status : [null],
     comment: [null]
  })
 }

 createInspectionTypeForm(): void {
   this.addInspectionTypeForm = this.fb.group({
    InspectTypeOnly : [null]
   })
 }

 save(){
   console.log(this.addInspectionForm.value)
 }

 saveInspectionType(){
  console.log(this.addInspectionTypeForm.value);

  const inspecType : InspectionType = {
    InspectTypeOnly : this.inspecType.InspectTypeOnly
  }
  this.inspectionService.addInspectionType(inspecType).subscribe( res =>{
    console.log("Add Succesfully")
  });

}

 cancel(){
   this.addInspectionForm.reset()
 }





}
