import { Component, Input, ContentChild, OnInit } from '@angular/core';
import { InputRefDirective } from '../directive/input-ref.directive';
import { debug } from 'util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  @Input() label: string;
  @Input() validations:  { [index: string]: string};
  @Input() info: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  get isError() {
    return this.input.hasError;
  }

  get errorMessage() {
    const errors = this.input.errors;
    let error = '';
    const keys = Object.keys(this.validations);

    keys.some(key => {
        if (errors[key]) {
          error = this.validations[key];
          return true;
        }
      });
    return error;
  }

  ngOnInit() { }

  constructor() { }
}
