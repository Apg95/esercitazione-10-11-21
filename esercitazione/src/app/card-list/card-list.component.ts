import { Component, Input, OnInit } from '@angular/core';
import { Pop } from '../homepage/interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

@Input() item? : Pop[];


  constructor() { }

  ngOnInit(): void {
  }

}
