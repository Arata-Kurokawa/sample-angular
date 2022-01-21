import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "transition-scroll",
    loadChildren: () => import('./pages/scroll-after-transition-in-page/scroll-after-transition-in-page.module').then(m => m.ScrollAfterTransitionInPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
