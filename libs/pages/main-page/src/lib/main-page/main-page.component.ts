import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shop-app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public readonly chipsExample1 = [
    {
      title: 'First Chip',
    },
    {
      title: 'Second Chip With Longer Name',
    },
    {
      title: '3rd',
    },
    {
      title: '4th',
    },
    {
      title: '5th Chip That Is Hidden',
    },
  ];

  public readonly chipsExample2 = [
    {
      title: 'First Chip',
    },
    {
      title: 'Second Chip',
    },
    {
      title: '3rd Chip',
    },
  ];

  public readonly chipsExample3 = [
    {
      title: 'First',
    },
    {
      title: 'Second Chip With Longer Name',
    },
  ];

  public readonly chipsExample4 = [
    {
      title: 'First Chip And It Is Long',
    },
    {
      title: '2nd',
    },
    {
      title: '3rd',
    },
    {
      title: 'Fourth',
    },
    {
      title: '5th',
    },
    {
      title: '6th',
    },
    {
      title: '7th',
    },
    {
      title: '8th',
    },
  ];

  public readonly chipsExample5 = [
    {
      title: '1st',
    },
    {
      title: '2nd',
    },
    {
      title: '3rd',
    },
    {
      title: '4th Chip Is Also Long',
    },
    {
      title: '5th',
    },
    {
      title: '6th Chip I Cannot See',
    },
    {
      title: '7th Chip I Cannot See',
    },
  ];

  public readonly chipsExamples = [
    this.chipsExample1,
    this.chipsExample2,
    this.chipsExample3,
    this.chipsExample4,
    this.chipsExample5,
  ];
}
