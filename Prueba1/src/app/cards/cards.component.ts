import { Component, Input, EventEmitter, Output, booleanAttribute } from '@angular/core';
import { SharedDataService } from './../shared-data.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() game: any
  @Output() propagar = new EventEmitter<boolean>()

  bandera : boolean = true;
  toggleComponent() {
    console.log("toggleComponent", this.bandera)
    this.propagar.emit(this.bandera);
  }
  constructor(private sharedDataService: SharedDataService) { }
}
