import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  textoInput: string = '';
  @Output() buscar = new EventEmitter<any>()
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.textoInput = (<HTMLInputElement>event.target).value;
      this.buscar.emit(this.textoInput);
    }
  }
}
