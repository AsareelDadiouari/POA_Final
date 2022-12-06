import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {Dropdown} from "./dropdown/dropdown";

@NgModule({
  imports: [
    CommonModule,
    Dropdown
  ],
  declarations: [

  ],
  exports: [
    Dropdown
  ]
})
export class SharedModule {}
