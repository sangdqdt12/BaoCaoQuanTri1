import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private isLoadingService: IsLoadingService,
  ) {}


  ngOnInit(): void {
  }
  async fakeServiceCall() {
    await wait(2000);

    return Math.random() > .4 ? true : false;
  }

  /**
   * Look ma! I don't have to manage any special loading variables!
   */

  button1() {
    this.isLoadingService.add({key: ['default', 'single']});
  }

  button2() {
    this.isLoadingService.remove({key: ['default', 'single']});
  }

  async button3() {
    this.isLoadingService.add({key: ['default', 'single']});

    const result = await this.isLoadingService.add(
      this.fakeServiceCall(),
      {key: 'button-one'}
    );

    if (result) {
      console.log('Our fake service call was a success!!!')
    }
    else {
      console.warn('Our fake service call failed :(... Try again?')
    }
  }

  button4() {
    this.isLoadingService.add({key: ['default', 'double']});
  }

  button5() {
    this.isLoadingService.remove({key: ['default', 'double']});
  }

}

function wait(nm: number) {
  return new Promise(res => {
    setTimeout(res, nm)
  })
}