import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId : number | undefined ;
  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.propertyId = this.routes.snapshot.params['id'] ;
  }

}
