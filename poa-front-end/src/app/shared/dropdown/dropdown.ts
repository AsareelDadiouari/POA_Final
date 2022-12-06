import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgForOf} from "@angular/common";

@Component({
	selector: 'app-dropdown[name]',
  standalone: true,
  imports: [NgbDropdownModule, NgForOf],
  templateUrl: './dropdown.html',
})
export class Dropdown implements OnInit {
  native: ElementRef;
  @Output() action: EventEmitter<{event: MouseEvent, route: string}> = new EventEmitter();
  @Input() name: string;
  buttonNames: string[] = [];

  constructor(public elementRef: ElementRef) {
    this.native = elementRef;
  }

  ngOnInit(): void {
    this.buttonNames = this.native.nativeElement.getAttributeNames()
      .map(attribute => this.native.nativeElement.getAttribute(attribute))
      .filter(attribute => !attribute.includes("_ngcontent") && !attribute.includes(this.name));
  }

  emitClickedEvent(event: MouseEvent, dropdownItemName: string): void {
    let route = ""
    console.log(dropdownItemName);

    if (dropdownItemName.includes("Ajouter") && dropdownItemName.includes("employee"))
      route="add-employee"
    else if (dropdownItemName.includes("Liste") && dropdownItemName.includes("employee"))
      route="employees"
    else if (dropdownItemName.includes("Ajouter") && dropdownItemName.includes("organisation"))
      route="add-organization"
    else if (dropdownItemName.includes("Liste") && dropdownItemName.includes("organisation"))
      route="organizations"

    this.action.emit({event, route});
  }
}
