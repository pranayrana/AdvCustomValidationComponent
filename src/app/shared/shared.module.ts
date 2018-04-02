import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { InputRefDirective } from './directive/input-ref.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CustomInputComponent, InputRefDirective],
  exports: [CustomInputComponent, InputRefDirective]
})
export class SharedModule { }
