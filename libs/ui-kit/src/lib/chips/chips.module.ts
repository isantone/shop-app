import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChipsComponent } from './chips.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChipsComponent],
  exports: [ChipsComponent],
})
export class ChipsModule {}
