import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FireService } from '../fire.service';

@Component({
  selector: 'app-sec-software',
  templateUrl: './sec-software.component.html',
  styleUrls: ['./sec-software.component.css']
})
export class SecSoftwareComponent implements OnInit {
  
  Aplicaciones: Observable<any[]>;

  constructor(public fire_service: FireService) {

    this.Aplicaciones = this.fire_service.obt_lst('')
   }

  ngOnInit() {
    //console.log(this.fire_service.obt_lst(''))
    //this.fire_service.agregar_inicial('')
  }
}