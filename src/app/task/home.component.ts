import { Component } from '@angular/core';

export interface Priority {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'home.component',
    templateUrl: './home.component.html'
})
export class HomeComponent{
    priorities: Priority[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
}