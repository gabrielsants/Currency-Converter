import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Curriencie } from '../../models/currencie.model';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['../disabled-input/disabled-input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() response = new EventEmitter();
  @Input() currencie!: Curriencie;
  valueFrom : number = 0;

  constructor() {}

  ngOnInit() {}

  feedback(event: Event) {
    const valueFrom : number = Number((event.target as HTMLInputElement).value);
    this.response.emit(valueFrom);
  }
}
