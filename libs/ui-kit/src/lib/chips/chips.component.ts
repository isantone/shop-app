import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'isa-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {}
