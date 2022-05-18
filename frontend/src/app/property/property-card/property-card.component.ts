import { Iproperty } from './../iProperty.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input()
  propertyItem: Iproperty;

  constructor() { }
  ngOnInit(): void {
  }

}
