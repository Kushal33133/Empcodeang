import * as moment from 'moment';
import { AppUtil } from './AppUtil';




export class DateUtil {
  static getStandardTime (serverdatestr: string,serverformat: string,reqformat: string) {
    return moment(moment(serverdatestr,serverformat).toDate()).format(reqformat);
    // return moment(moment.utc(serverdatestr, serverformat).toDate()).format(reqformat);
  }

  static convertUtc (date: Date) {
    var ts = moment(date).local();
    console.log(ts);
    let time = ts.local().format('HH:mm');
    console.log(time);
    console.log(moment(date).utc().format('HH:mm'))
    console.log(moment(date).utc(false).format('HH:mm'))
  }

  static getStringDatefromJSON (json: any,reqformat: string) {
    return moment(moment(json).toISOString()).format(reqformat);
  }

  static getStringDatefromDate (date: Date,dateFormat: string) {
    return moment(moment(date)).format(dateFormat);
  }

  static getEdcilServerDateFormat (date: Date) {
    if (date != null && date != undefined) {
      date = this.getDateAfterRemovingTime(date);
      return this.getStringDatefromDate(date,"YYYY-MM-DD");
    } else {
    }

    // return d;
  }

  static getDateAfterRemovingTime (date: Date) {
    if (date != null && date !== undefined) {
      let dateString = this.getStringDatefromDate(date,"YYYY-MM-DD");
      return this.getDatefromString(dateString,"YYYY-MM-DD");
    }
    return date;
  }

  static getDateValueAfterRemovingTime (dateString: string) {
    if (!AppUtil.isNullOrEmpty(dateString)) {
      let date = this.getDateAfterRemovingTime(new Date(dateString));
      return date;
    }
  }

  static getEdcilInitationDateFormat (date: Date) {
    return moment(moment(date)).format("D-MMM-YYYY");
  }
  static getEdcilTimeFormat (date: Date) {
    // let d = moment(date).format('YYYY-MM-DDTHH:mm:ss.SSS');
    // let timeStamp = this.getDatefromString(d, 'YYYY-MM-DDTHH:mm:ss.SSS').getTime();
    if (AppUtil.isNotNull(date)) {
      let timeStamp = date.getTime();
      console.log(timeStamp);
      return timeStamp + "";
    }
  }

  static getEdcilDisplayDateFormat (date: Date) {
    return this.getStringDatefromDate(date,"DD-MMM-YYYY");
  }

  static getEdcilDisplayTimeFormat (date: Date) {
    return this.getStringDatefromDate(date,"hh:mm a");
  }

  static getEdcilTImeWithAmPm () {

  }

  static getDatefromString (datestring: string,format: string) {
    return moment(datestring,format).toDate();
  }

  static getEdcilDateString (datestring: string) {
    let d = this.getDatefromString(datestring,"DD-MMM-YYYY")
    return this.getEdcilServerDateFormat(d);
    // return moment(datestring, "DD-MMM-YYYY").toDate();
  }

  static convertDateFormatOfPackageTimeline (dateString: string) {
    let d = new Date(dateString);
    return this.getStringDatefromDate(d,"DD MMM YYYY");
  }

  static convertDateFormat (datestring: string,currentFormat: string,requiredFormat: string) {
    let d = this.getDatefromString(datestring,"DD-MMM-YYYY")
    return this.getEdcilServerDateFormat(d);
    // return moment(datestring, "DD-MMM-YYYY").toDate();
  }

  static getDatefromMs (milliseconds: number,reqdateformat: string) {
    return moment(milliseconds).format(reqdateformat);
  }

  static addMonthToDate (date,numOfMonth) {
    return moment(date).add(numOfMonth,'months').toDate();
  }

  static addDaysToDate (date,numOfDays) {
    return moment(date).add(numOfDays,'d').toDate();
  }

  static removeDaysToDate (date,numOfDays) {
    return moment(date).subtract(numOfDays,'d').toDate();
  }

  static addMinutesToDate (date,minutes) {
    return moment(date).add(minutes,'minutes').toDate();
  }

  static isValid (date: Date) {
    return moment(date).isValid();
  }

  static convertDateFormatOfPackageUserTimeline (dateString: string) {
    let d = this.getDatefromString(dateString,"DD/MM/YYYY")
    return this.getStringDatefromDate(d,"DD-MMM-YYYY");
  }

  static convertDateFormatOfInitiatePage (dateString: string) {
    let d = this.getDatefromString(dateString,"YYYY-MM-DD")
    return this.getStringDatefromDate(d,"DD-MMM-YYYY");
  }

  static getDateFromTimestamp (value) {
    return moment(value).format("DD-MMM-YYYY");
  }
  static getStatusActionTime (value) {
    return moment(value).format("DD-MMM-YYYY HH:mm");
  }

  static getYear (d: Date,years: number): string {
    let date = moment(d).add(years,'year').toDate();
    return moment(moment(date)).format("YYYY");
  }

  static getEdcilDate (dateString: string) {
    let d: Date = undefined;
    if (!AppUtil.isNullOrEmpty(dateString)) {
      d = new Date(dateString)
    }
    return this.getDateAfterRemovingTime(d);
  }


  static checkHoursDiffrenceBetweenTowDate (date1: number,date2: number) {
    var now = moment(new Date(this.msToTimeConversion(date1, "DD-MMM-YYYY HH:mm")));
    var end = moment(new Date(this.msToTimeConversion(date2, "DD-MMM-YYYY HH:mm")));
    return moment.duration(now.diff(end)).asHours();
  }

  static msToTimeConversion(msTime: number, format: string) {
    return moment(msTime).format(format);
  }

  static getTooltipDisplayDateFormat (date: Date) {
    return this.getEdcilDisplayDateFormat(this.getDateAfterRemovingTime(date));
  }

}

