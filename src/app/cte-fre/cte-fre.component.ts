import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cte-fre',
  templateUrl: './cte-fre.component.html',
  styleUrls: ['./cte-fre.component.css']
})
export class CteFreComponent implements OnInit {
  
  @Input() public titulo: string;

  constructor() { }

  ngOnInit() {
  }

}