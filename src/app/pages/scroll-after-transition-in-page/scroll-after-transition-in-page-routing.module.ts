import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ScrollAfterTransitionInPageContainerComponent } from './scroll-after-transition-in-page.container'

const routes: Routes = [
  { path: '', component: ScrollAfterTransitionInPageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollAfterTransitionInPageRoutingModule {}
