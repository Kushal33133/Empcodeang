import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { MAT_DIALOG_DATA, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MatPaginator } from '@angular/material/core';



import * as _ from 'lodash';

const ELEMENT_DATA = [];
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  dataSource: any;
  selected = 'option2';
  Filter: string;
  from: string;
  to: string;
  Edit: boolean;
  Pagination: boolean = false;
  SelectedColumn: string;
  SelectExcel: any;
  ColumnFilter: string;

  displayedColumns = ['actions'];

  CustomExcelImport: any = [];
  checkdata = [];

  columnDefinitions = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sendDialog: MatDialogRef<DynamicTableComponent>, public dialog: MatDialog) {
    this.Edit = data.Edit;

    Object.keys(data.Table[0]).forEach(element => {
      this.displayedColumns.push(element);
      this.checkdata.push(element);
      var data = {
        def: element,
        hide: false
      }
      this.columnDefinitions.push(data);
    })

    // ELEMENT_DATA.push(data.Table);
    this.dataSource = new MatTableDataSource(data.Table);
    //console.log(ELEMENT_DATA);
    // if (data.Table.length > 5) {

    // }
    // this.updateColumns();
    //   console.log(this.columnDefinitions);




  }

  // ExcelExport() {
  //   //  console.log("hello");

  //   if (!AppUtil.isNullOrEmpty(this.dataSource)) {

  //     if (confirm("Do You Want To Export Excel")) {
  //       this.excel.exportAsExcelFile(this.dataSource.filteredData, 'Report');

  //     }
  //   }
  //   else {
  //     this.trx.error("Please Choose Valid Filter First!!", "Error");
  //   }


  // }

  // ExcelExport () {
  //   //  console.log("hello");

  //   if (!AppUtil.isNullOrEmpty(this.dataSource)) {

  //     this.excel.exportAsExcelFile(this.dataSource,'Report');

  //     // if (confirm("Do You Want To Export Excel")) {
  //     //   if (this.SelectExcel.length === 0) {
  //     //     // console.log(this.dataSource);
  //     //     this.excel.exportAsExcelFile(this.dataSource.filteredData,'Report');
  //     //   }
  //     //   else {
  //     //     //  console.log(this.dataSource.data);
  //     //     _.each(this.dataSource.data,(o) => {
  //     //       this.CustomExcelImport.push(_.omit(o,this.SelectExcel));
  //     //     });
  //     //     this.excel.exportAsExcelFile(this.CustomExcelImport,'Report');
  //     //   }


  //     // }
  //   }
  //   else {
  //     this.trx.error("Please Choose Valid Filter First!!","Error");
  //   }


  // }

  SelectedRaw(data) {
    //console.log(data);
    if (this.Edit) {

      this.sendDialog.close(data);
    }


  }
  ClosedDialog() {
    var d = {
      Closed: true
    }
    this.sendDialog.close(d);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyColumnwise(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  }


  FilterByRange() {


    this.dataSource.filterPredicate = (data, filter) => {


      if (this.from && this.to) {
        return data[this.SelectedColumn] >= this.from && data[this.SelectedColumn] <= this.to;
      }

      return true;
    }
    this.dataSource.filter = '' + Math.random();

  }

  FilterChoose() {
    //console.log(this.Filter)
  }

  updateColumns() {

    // this.displayedColumns = ELEMENT_DATA.filter(c => !this.SelectedColumn).map(c => this.SelectedColumn);
    //console.log(this.displayedColumns);
    return this.displayedColumns.filter(c => 'BRANCH').map(c => 'BRANCH');
    // console.log()
    // console.log(this.dataSource)
  }
  CustomExcel() {
    this.columnDefinitions = [];
    Object.keys(this.data.Table[0]).forEach(element => {
      var data = {
        def: element,
        hide: false
      }
      this.columnDefinitions.push(data);
    })

    if (this.SelectExcel.length > 0) {

      _.forEach(this.SelectExcel, a => {
        var o = _.find(this.columnDefinitions, b => a === b.def);
        if (o) {
          o.hide = true;
        }
      });
    }
    if (this.SelectExcel.length === 0) {
      this.columnDefinitions.forEach(Element => {
        Element.hide = false
      })

    }


  }
  getDisplayedColumns(): string[] {

    return this.columnDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

}
