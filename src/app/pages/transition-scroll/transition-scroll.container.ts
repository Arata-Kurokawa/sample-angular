import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core'
import { TransitionScrollComponent } from './components/transition-scroll.component'
import { Subject } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators'
import * as dayjs from 'dayjs'

@Component({
  templateUrl: './transition-scroll.container.html',
  styleUrls: [ './transition-scroll.container.scss' ]
})
export class TransitionScrollContainerComponent  implements OnInit, AfterViewChecked {
  @ViewChild('transitionScroll') transitionScroll!: TransitionScrollComponent

  date = dayjs(Date.now())
  today = dayjs(Date.now())

  private scrollable$ = new Subject<void>()
  private unsubscribe$ = new Subject<void>()

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.scrollable$.next(void 0)
  }

  prevMonth() {
    this.date = this.date.add(-1, 'month')
  }

  nextMonth() {
    this.date = this.date.add(1, 'month')
  }

  navigateToday() {
    this.scrollable$
      .pipe(
        take(1),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.transitionScroll.scrollToday()
      })

    this.date = this.today
  }
}
