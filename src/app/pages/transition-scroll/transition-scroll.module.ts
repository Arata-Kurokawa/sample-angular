import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TransitionScrollContainerComponent } from './transition-scroll.container'
import { TransitionScrollRoutingModule } from './transition-scroll-routing.module'
import { TransitionScrollComponent } from './components/transition-scroll.component'


@NgModule({
  declarations: [
    TransitionScrollContainerComponent,
    TransitionScrollComponent
  ],
  imports: [
    CommonModule,
    TransitionScrollRoutingModule
  ],
})
export class TransitionScrollModule {}
