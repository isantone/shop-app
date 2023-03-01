import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pagesMainPageRoutes } from './lib.routes';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesMainPageRoutes)],
  declarations: [MainPageComponent],
})
export class PagesMainPageModule {}
