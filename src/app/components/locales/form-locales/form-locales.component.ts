import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Local from 'src/app/models/locales.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-locales',
  templateUrl: './form-locales.component.html',
  styleUrls: ['./form-locales.component.css']
})
export class FormLocalesComponent implements OnInit {

  @Input() local:Local = new Local();
  @Output() handleSubmit:EventEmitter<Local> = new EventEmitter<Local>();
  constructor() {
  }

  ngOnInit() {
    console.log(this.local);
  }

  onSubmit(localForm:NgForm){

    const { valid, value } = localForm;

    if(valid){
      const newModel = Object.assign({},this.local,value)
      this.handleSubmit.emit(newModel);
    }
  }

}
