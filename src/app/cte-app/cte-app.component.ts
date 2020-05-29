import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cte-app',
  templateUrl: './cte-app.component.html',
  styleUrls: ['./cte-app.component.css']
})
export class CteAppComponent implements OnInit {
  
  @Input() public titulo: string;
  @Input() public icono: string;

  constructor() { }

  ngOnInit() {
  }

}