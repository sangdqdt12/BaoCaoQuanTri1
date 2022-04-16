import { Component, NgModule, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';
import { navigation } from '../../../app-navigation';

import * as events from 'devextreme/events';
import { ReportService } from 'src/app/01.Service/report.service';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import notify from 'devextreme/ui/notify';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DxTreeViewComponent, { static: true })
  menu: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<string>();

  @Output()
  openMenu = new EventEmitter<any>();

  private _selectedItem: String;
  @Input()
  set selectedItem(value: String) {
    this._selectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }
  workEv: WorkingEnviroment;

  private _items: any[];
  get items() {

    /*
    if (!this._items) {
      this._items = navigation.map((item) => {
        if(item.path && !(/^\//.test(item.path))){ 
          item.path = `/${item.path}`;
        }
         return { ...item, expanded: !this._compactMode }
        });
    }
    */
    if (!this._items) {
      this.workEv = this.storage.get('ENV');
      var userGetData = this.workEv.UserID;

      this.reportService.CP_Quyen_user(userGetData).toPromise().then(
        data => {
          this._items = this.taoMenu(data);
        },
        err => {
          notify('Có lõi khi lấy quyền', 'error');
        }

      );
    };




    return this._items;
  }

  taoMenu (rowData: any[]) : any[]
  {
    var menu : any[] = [];
    rowData.forEach(t=> {

      if(t.CodeParent == '0')
      {
        menu.push({'Code': t.Code,'icon': t.icon, 'path': t.path,'text': t.text, 'items':[]});

      }
    });
    menu.forEach (q=> {
      rowData.forEach (t => {
        if (t.CodeParent == q.Code)
        {
          q.items.push({'Code': t.Code,'icon': t.icon, 'path': t.path,'text': t.text});
        }
      });
    });


    return menu;
  }
  

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }
  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this._selectedItem);
    }
  }

  constructor(private elementRef: ElementRef,
    private reportService: ReportService,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) {

  }

  onItemClick(event) {
    this.selectedItemChanged.emit(event);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}

@NgModule({
  imports: [DxTreeViewModule],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent]
})
export class SideNavigationMenuModule { }
