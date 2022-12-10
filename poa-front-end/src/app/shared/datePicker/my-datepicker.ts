import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDatepickerModule, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'my-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './my-datepicker.html',
})
export class MyDatepicker {
  model: NgbDateStruct;
  @Output() dateChanged: EventEmitter<Date> = new EventEmitter();
  @Input() id: string;

  constructor(private calendar: NgbCalendar) {
  }

  emitDateChanged(date: NgbDate) {
    this.dateChanged.emit(new Date(date.year + "-" + date.month + "-" + date.day));
  }
}
