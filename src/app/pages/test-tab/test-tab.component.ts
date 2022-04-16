import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styleUrls: ['./test-tab.component.scss']
})
export class TestTabComponent implements OnInit {

  cap1s: string[];
  innerWidth: any;
  vTab1: string;
  vTab2: string;
  vTab3: string;

  popupWidth:any;
  popupHeight:any;


  popupDetailVisible: boolean =false;

  constructor() { }

  ngOnInit(): void {
    this.cap1s = ["Muc 1", "Muc 2", "Muc 3"];
    this.innerWidth = window.innerWidth;
    this.vTab1 = "block";
    this.vTab2 = "block";
    this.vTab3 = "block";

   
    
    this.popupWidth = window.innerWidth - 20;
    this.popupHeight = window.innerHeight - 20;

  }

  addRow()
  {

    this.popupDetailVisible = true;
  }

  deleteRow()
  {}

  editRow()
  {}
  selCap1(e){
    if(e.itemData == "Muc 1") {
      this.vTab1 = "block";
      this.vTab2 = "none";
      this.vTab3 = "none";
    } else if(e.itemData == "Muc 2") {
      this.vTab1 = "none";
      this.vTab2 = "block";
      this.vTab3 = "none";
    }
    else if(e.itemData == "Muc 3") {
      this.vTab1 = "none";
      this.vTab2 = "none";
      this.vTab3 = "block";
    }


  }

}
