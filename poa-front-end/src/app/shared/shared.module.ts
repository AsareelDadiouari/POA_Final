import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {Dropdown} from "./dropdown/dropdown";
import {MyDatepicker} from "./datePicker/my-datepicker";
import {MyTable} from "./table/my-table";

@NgModule({
  imports: [
    CommonModule,
    Dropdown,
    MyDatepicker,
    MyTable
  ],
  declarations: [],
  exports: [
    Dropdown,
    MyDatepicker,
    MyTable
  ]
})
export class SharedModule {
}
