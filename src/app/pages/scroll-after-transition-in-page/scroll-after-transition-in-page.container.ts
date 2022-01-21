import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core'
import { ScrollAfterTransitionInPageComponent } from './components/scroll-after-transition-in-page.component'
import { BehaviorSubject, Subject, timer } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators'
import * as dayjs from 'dayjs'

@Component({
  templateUrl: './scroll-after-transition-in-page.container.html',
  styleUrls: [ './scroll-after-transition-in-page.container.scss' ]
})
export class ScrollAfterTransitionInPageContainerComponent  implements OnInit, AfterViewChecked {
  @ViewChild('scrollAfterTransitionInPage') scrollAfterTransitionInPage!: ScrollAfterTransitionInPageComponent

  date$ = new BehaviorSubject<dayjs.Dayjs | null>(null)

  today = dayjs(Date.now())
  private date = dayjs(Date.now())
  private scrollable$ = new Subject<void>()
  private unsubscribe$ = new Subject<void>()

  constructor(
  ) {
  }

  ngOnInit(): void {
    timer(1000).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.date$.next(this.date)
    })
  }

  ngAfterViewChecked() {
    this.scrollable$.next(void 0)
  }

  prevMonth() {
    this.date = this.date.add(-1, 'month')
    this.date$.next(this.date)
  }

  nextMonth() {
    this.date = this.date.add(1, 'month')
    this.date$.next(this.date)
  }

  navigateToday() {
    this.scrollable$
      .pipe(
        take(1),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.scrollAfterTransitionInPage.scrollToday()
      })

    this.date = this.today
    this.date$.next(this.date)
  }
}
