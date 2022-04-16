import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tim-kiem-loai1',
  templateUrl: './tim-kiem-loai1.component.html',
  styleUrls: ['./tim-kiem-loai1.component.scss']
})
export class TimKiemLoai1Component implements OnInit {

  @Input() tuNgayVal : Date = new Date();
  @Output() tuNgayValChange = new EventEmitter<Date>();
  @Input() khois;
  @Input() khoiVal;
  @Output() khoiValChange = new EventEmitter<any>();
  @Input() popupVisible: boolean = false;
  @Output() popupVisibleChange = new EventEmitter<boolean>();

  @Output() searchChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  fillData() {
    this.popupVisible = false;
    this.searchChange.emit(true);
  }
  close () {

  }

}
