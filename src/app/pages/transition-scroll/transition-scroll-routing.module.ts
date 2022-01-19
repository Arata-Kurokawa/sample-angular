import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TransitionScrollContainerComponent } from './transition-scroll.container'

const routes: Routes = [
  { path: '', component: TransitionScrollContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionScrollRoutingModule {}
