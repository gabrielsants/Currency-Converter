import { Component, Input, OnInit } from '@angular/core';
import { Curriencie } from '../../models/currencie.model';

@Component({
  selector: 'disabled-input',
  templateUrl: './disabled-input.component.html',
  styleUrls: ['./disabled-input.component.scss'],
})
export class DisabledInput implements OnInit {
  @Input() placeholder: string = '';
  @Input() currencie!: Curriencie;

  constructor() {}

  ngOnInit() {}
}
