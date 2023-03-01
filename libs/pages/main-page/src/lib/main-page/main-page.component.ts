import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shop-app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
