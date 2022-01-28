import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OutletTransitionScrollKeepContainerComponent } from './outlet-transition-scroll-keep.container'
import { ScrollAfterTransitionInPageRoutingModule } from './outlet-transition-scroll-keep-routing.module'


@NgModule({
  declarations:[
    OutletTransitionScrollKeepContainerComponent
  ],
  imports: [
    CommonModule,
    ScrollAfterTransitionInPageRoutingModule
  ]
})
export class OutletTransitionScrollKeepModule {}
