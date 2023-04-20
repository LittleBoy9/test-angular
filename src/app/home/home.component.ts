import { Component } from '@angular/core';
import { cards } from '../core/cards';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'test-angular';
  cards = cards;

}
