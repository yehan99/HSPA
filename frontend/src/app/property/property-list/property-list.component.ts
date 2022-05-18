import { Iproperty } from './../iProperty.interface';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  sellRent =1 ;
  property: Array<Iproperty> | undefined ;

  constructor( private route: ActivatedRoute,  private housingService: HousingService) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent =2 ;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data=>{
        this.property = data;
        console.log(this.route.snapshot.toString())
      },error=>{
        console.log("http error");
        console.log("error")
      }
    )
  }

  // MatPaginator Inputs
  length = 100;
  pageSize = 8;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
