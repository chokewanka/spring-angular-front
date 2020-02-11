import { Component, OnInit, Input } from '@angular/core';
import Conocimiento from 'src/app/models/conocimientos.model';

@Component({
  selector: 'app-show-conocimientos',
  templateUrl: './show-conocimientos.component.html',
  styleUrls: ['./show-conocimientos.component.css']
})
export class ShowConocimientosComponent implements OnInit {

  @Input() conocimiento:Conocimiento = new Conocimiento();
  @Input() i:number;
  constructor() {
  }

  ngOnInit() {
    
  }

}
