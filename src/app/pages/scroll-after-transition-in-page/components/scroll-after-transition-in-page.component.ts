import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-scroll-after-transition-in-page',
  templateUrl: './scroll-after-transition-in-page.component.html',
  styleUrls: [ './scroll-after-transition-in-page.component.scss' ]
})
export class ScrollAfterTransitionInPageComponent implements OnInit, AfterViewChecked {
  @ViewChild('dateList') private dateList!: ElementRef

  @Input() today: dayjs.Dayjs = dayjs(Date.now())
  @Input()
  get date(): dayjs.Dayjs { return this._date }
  set date(v: dayjs.Dayjs) {
    this._date = v

    const startDate = dayjs(v).startOf("month")
    const endDate = dayjs(v).endOf("month")

    const dateList: dayjs.Dayjs[] = []
    for(let date = startDate; date <= endDate; date = date.add(1, 'day')){
      dateList.push(date)
    }

    const dateInfoList: { date: dayjs.Dayjs, isToday: boolean }[] = []
    const today = dayjs(this.today)
    dateList.forEach(date => {
      dateInfoList.push({
        date: date,
        isToday: today.isSame(date, 'day')
      })
    })
    this.dateInfoList = dateInfoList
  }

  private _date!: dayjs.Dayjs

  dateInfoList: { date: dayjs.Dayjs, isToday: boolean }[] = []

  ngOnInit() {
  }

  ngAfterViewChecked() {
  }

  scrollToday(): void {
    const element = this.dateList.nativeElement.querySelector('#today')
    element?.scrollIntoView({ block: 'end', inline: 'center' })
  }
}
