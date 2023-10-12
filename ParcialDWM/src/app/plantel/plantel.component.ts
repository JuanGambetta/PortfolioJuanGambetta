import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantel',
  templateUrl: './plantel.component.html',
  styleUrls: ['./plantel.component.css']
})
export class PlantelComponent implements OnInit {
  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute) {}
  jugadores: any;
  ngOnInit(): void {
    this.jugadores = history.state.jugador;
    console.log(this.jugadores);
  }
}
