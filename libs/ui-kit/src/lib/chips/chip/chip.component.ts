import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'isa-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {}
