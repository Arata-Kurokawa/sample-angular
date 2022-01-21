import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollAfterTransitionInPageContainerComponent } from './scroll-after-transition-in-page.container'
import { ScrollAfterTransitionInPageRoutingModule } from './scroll-after-transition-in-page-routing.module'
import { ScrollAfterTransitionInPageComponent } from './components/scroll-after-transition-in-page.component'


@NgModule({
  declarations: [
    ScrollAfterTransitionInPageContainerComponent,
    ScrollAfterTransitionInPageComponent
  ],
  imports: [
    CommonModule,
    ScrollAfterTransitionInPageRoutingModule
  ],
})
export class ScrollAfterTransitionInPageModule {}
