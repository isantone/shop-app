import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@shop-app/pages/main-page').then((m) => m.PagesMainPageModule),
  },
];
