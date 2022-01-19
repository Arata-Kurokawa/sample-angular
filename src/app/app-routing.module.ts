import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "transition-scroll",
    loadChildren: () => import('./pages/transition-scroll/transition-scroll.module').then(m => m.TransitionScrollModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
