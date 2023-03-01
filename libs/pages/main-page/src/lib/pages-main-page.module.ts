import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pagesMainPageRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesMainPageRoutes)],
})
export class PagesMainPageModule {}
