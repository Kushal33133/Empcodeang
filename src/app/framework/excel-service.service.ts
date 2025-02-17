import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor() { }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    json.forEach((data) => {
      if (data.hasOwnProperty('CN_STATUS')) {
        if (data.CN_STATUS === 2) {
          Object.assign(data, {
            STATUS: 'HOLD'
          });
          // data.CN_STATUS = 'HOLD';
        } else {
          Object.assign(data, {
            STATUS: 'ALLOWED'
          });
          // data.CN_STATUS = 'ALLOWED';
        }
      } else {
        Object.assign(data, {
          STATUS: 'ALLOWED'
        });
        // data.CN_STATUS = 'ALLOWED';
      }
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
