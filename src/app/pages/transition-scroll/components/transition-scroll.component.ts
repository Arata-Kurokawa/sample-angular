import { Component, Input } from '@angular/core'


@Component({
  selector: 'app-transition-scroll',
  templateUrl: './transition-scroll.component.html',
  styleUrls: [ './transition-scroll.component.scss' ]
})
export class TransitionScrollComponent {

  private _date!: Date

  @Input()
  get date(): Date { return this._date }
  set date(v: Date) {
    this._date = v

    const dateList: Date[] = []
    for (let i = 0; i < 25; i++) {
      dateList.push(new Date(v.getFullYear(), v.getMonth(), v.getDate() + i))
    }

    this.dateList = dateList
  }

  dateList: Date[] = []



}
