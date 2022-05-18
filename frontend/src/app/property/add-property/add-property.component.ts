import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproperty } from '../iProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;
  selectedIndex: any;
  propertyTypes : Array<any> = ['House', 'Apartment', 'Duploex'];
  furnishTypes : Array<any> = ['Fully', 'Semi', 'Unfernished'];
  propertyItem: Iproperty = {
    Id: null ,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null,
    Description: ''
  } ;

  constructor() {}
  radioModel = 'Middle';
  radioModelDisabled = 'Middle';
  modelGroupDisabled = false;
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.addPropertyForm);
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }


}
