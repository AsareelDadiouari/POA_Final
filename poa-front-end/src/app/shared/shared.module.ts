import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {Dropdown} from "./dropdown/dropdown";
import {MyDatepicker} from "./datePicker/my-datepicker";
import {MyTable} from "./table/my-table";
import {ContributionInfoModal} from "./modal/contribution-info-modal.component";

@NgModule({
  imports: [
    CommonModule,
    Dropdown,
    MyDatepicker,
    MyTable,
    ContributionInfoModal
  ],
  declarations: [],
  exports: [
    Dropdown,
    MyDatepicker,
    MyTable,
    ContributionInfoModal
  ]
})
export class SharedModule {
}
