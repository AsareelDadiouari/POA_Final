import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {Dropdown} from "./dropdown/dropdown";
import {MyDatepicker} from "./datePicker/my-datepicker";

@NgModule({
  imports: [
    CommonModule,
    Dropdown,
    MyDatepicker
  ],
  declarations: [

  ],
  exports: [
    Dropdown,
    MyDatepicker
  ]
})
export class SharedModule {}
