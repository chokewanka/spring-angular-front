import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalesService } from '../../../services/locales.service';
import Local from '../../../models/locales.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-locales',
  templateUrl: './show-locales.component.html',
  styleUrls: ['./show-locales.component.css']
})
export class ShowLocalesComponent implements OnInit {

  local: Local = new Local();

  constructor( private route: ActivatedRoute
             , private _localesService: LocalesService ) {

    const {id} = this.route.snapshot.params;
    
    this._localesService.getLocal(parseInt(id)).subscribe((local: Local) => {
      this.local = local;
    });

  }

  ngOnInit() {
  }



}
