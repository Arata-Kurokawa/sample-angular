import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OutletTransitionScrollKeepContainerComponent } from './outlet-transition-scroll-keep.container'

const routes: Routes = [
  { path: '', component: OutletTransitionScrollKeepContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollAfterTransitionInPageRoutingModule {}
