import { Component } from '@angular/core';
import { Curriencie } from './models/currencie.model';
import { ConverterApiService } from './services/converter-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private converterService: ConverterApiService) {}

  public title : string = 'Currency-Converter';
  public indexFrom : number = 0;
  public indexTo : number = 0;
  public valueFrom : number = 0;
  public valueTo : number = 0;
  public currencies : Curriencie[] = [
    {
      id: 0,
      value: 'USD',
      prefix: '$',
    },
    {
      id: 1,
      value: 'BRL',
      prefix: 'R$',
    },
    {
      id: 2,
      value: 'CAD',
      prefix: '$',
    },
    {
      id: 3,
      value: 'EUR',
      prefix: '€',
    },
  ];

  setValueFrom(value: number) {
    this.valueFrom = value;
  }

  setValueTo(value: number) {
    this.valueTo = value;
  }

  setIndexFrom(index: number) {
    this.indexFrom = index;
  }

  setIndexTo(index: number) {
    this.indexTo = index;
  }

  converter() {
    let from_to = `${this.currencies[this.indexFrom].value}_${this.currencies[this.indexTo].value}`;

    this.converterService.converter(from_to).subscribe((payload) => {
        for (const [key, currency] of Object.entries(payload)) {
          if (String(key) == from_to) {
            this.valueTo = Number((this.valueFrom * Number(currency)).toFixed(2));
          }
        }
    });

  }
}
