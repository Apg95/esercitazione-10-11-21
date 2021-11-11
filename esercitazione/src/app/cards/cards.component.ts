import { Component, OnInit, Input } from '@angular/core';
import { Pop } from '../homepage/interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  @Input() pops! : Pop;


  constructor() { }

  ngOnInit(): void {
  }

}
