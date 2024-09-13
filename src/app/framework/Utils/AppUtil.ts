import { ElementRef } from "@angular/core";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export class AppUtil {
  static isNullOrEmpty (s: any) {
    if (s === undefined || s === null || s === '') {
      return true;
    } else {
      return false;
    }
  }

  static isNullEmpty (data: any) {
    if (data === undefined || data === null) {
      return true;
    }
    return false;
  }

  static isNotNull (data: any) {
    return !this.isNullEmpty(data);
  }

  static isListNullOrEmpty (list: any[]) {
    if (list === undefined || list === null || list.length === 0) {
      return true;
    }
    return false;
  }

  static isChangeData (data: any) {
    if (data === undefined || data === null) {
      return '';
    }
    else {
      return data;
    }
  }

  static isCheckReturnZero (s: any) {
    if (s === undefined || s === null || s === '') {
      return 0;
    } else {
      return s;
    }
  }

  static isCheckNumReturnZero (s: any) {
    if (s === undefined || s === null || s === '' || isNaN(s)) {
      return 0;
    } else {
      return s;
    }
  }

  static ToggleEmptyValue (s: any) {
    if (s === undefined) {
      return '';
    }
    if (s === null) {
      return ''
    }
    if (s === '') {
      return undefined
    }
  }

  static checkStringContainsOnlyNumbers (str): boolean {
    return !isNaN(str);
  }

  static getOS () {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh','MacIntel','MacPPC','Mac68K'],
      windowsPlatforms = ['Win32','Win64','Windows','WinCE'],
      iosPlatforms = ['iPhone','iPad','iPod'],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }

    return os;
  }

  static exportHTMLTableToExcel (table: ElementRef,fileName: string) {
    if (!this.isNullOrEmpty(table) && !this.isNullOrEmpty(fileName)) {
      const HHTMLtable = table.nativeElement;
      var wb = XLSX.utils.table_to_book(HHTMLtable);
      var wbout = XLSX.write(wb,{
        bookSST: true,
        type: 'binary'
      });
      var buf = new ArrayBuffer(wbout.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xFF;
      saveAs(new Blob([buf],{ type: "application/octet-stream" }),`${fileName}.xlsx`);
    }
  }



  /* static getFormatedDecimalValue (val) {
    if (!isNaN(val)) {
      return Number(val);
    } else {
      return val;
    }
  } */
}
