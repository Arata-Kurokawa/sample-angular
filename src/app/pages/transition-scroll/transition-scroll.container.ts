import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  templateUrl: './transition-scroll.container.html',
  styleUrls: [ './transition-scroll.container.scss' ]
})
export class TransitionScrollContainerComponent implements OnInit{
  date = new Date(Date.now())

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const year = this.activatedRoute.snapshot.queryParams.year
    const month = this.activatedRoute.snapshot.queryParams.month


    if (year && month) {
      this.date = new Date(year, month, 1)
    } else {
      const today = new Date(Date.now())
      this.date = new Date(today.getFullYear(), today.getMonth(), 1)
    }
  }

  prevMonth() {
    const [newYear, newMonth] = this.date.getMonth() <= 0 ? [this.date.getFullYear() - 1, 11] : [this.date.getFullYear(), this.date.getMonth() - 1]
    this.date = new Date(newYear, newMonth, 1)
  }

  nextMonth() {
    const [newYear, newMonth] = this.date.getMonth() >= 11 ? [this.date.getFullYear() + 1, 0] : [this.date.getFullYear(), this.date.getMonth() + 1]
    this.date = new Date(newYear, newMonth, 1)
  }

  navigateToday() {
    const today = new Date(Date.now())
    this.date = new Date(today.getFullYear(), today.getMonth(), 1)
  }
}
