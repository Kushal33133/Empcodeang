import { classToPlain,plainToClass } from "class-transformer";
import { JsonParser } from "./ApiGenerator";
import { AppUtil } from "./Utils/AppUtil";


export class StorageUtil {



  static getAuthToken () {
    return this.getItem(KEYS.TOKEN);
  }

  static saveToken (token: string) {
    this.setItem(KEYS.TOKEN,token);
  }

  static getUserId () {
    //TODO: remove hardcoded value = 1
    // return this.getItem(KEYS.USER_ID);
    return '1';
  }

  static logoutUser () {
    // logoutuser
    // sessionStorage.removeItem(KEYS.USER_DATA);
    this.clearAllData();
  }

  static clearAllData () {
    sessionStorage.clear()
    localStorage.clear();
  }

  static setFromPriorReview (isFromPriorReview: boolean) {
    if (isFromPriorReview) {
      this.setItem(KEYS.IS_FROM_PRIOR_REVIEW,"Yes")
    } else {
      this.setItem(KEYS.IS_FROM_PRIOR_REVIEW,"No")
    }
  }

  static get isFromPriorReview () {
    let isFromPriorReview = this.getItem(KEYS.IS_FROM_PRIOR_REVIEW);
    if (AppUtil.isNotNull(isFromPriorReview) && isFromPriorReview === "Yes") {
      return true;
    }
    return false;
  }



  static setItem (key: string,value: string) {
    sessionStorage.setItem(key,value)
  }
  static getItem (key: string) {
    return sessionStorage.getItem(key)
  }

  static getInstName (): string {
    let val = JSON.parse(sessionStorage.getItem('edcil') || '{}');
    let currentUser = val['currentUser'];
    if (!AppUtil.isNullEmpty(currentUser) && !AppUtil.isNullEmpty(currentUser['user'])) {
      let user = currentUser['user'];
      return user['instname']
    }
    return "";
  }

  static getUser () {
    let val = JSON.parse(sessionStorage.getItem('edcil') || '{}');
    let currentUser = val['currentUser'];
    if (!AppUtil.isNullEmpty(currentUser) && !AppUtil.isNullEmpty(currentUser['user'])) {
      return currentUser['user'];
    }
  }

  static getStateName () {
    let user = this.getUser();
    if (user) {
      return user['statname']
    }
  }

  static getFullName () {
    let user = this.getUser();
    let fullName = "";
    if (!AppUtil.isNullEmpty(user)) {
      if (!AppUtil.isNullOrEmpty(user['firstName'])) {
        fullName += user['firstName'] + " "
      }
      if (!AppUtil.isNullOrEmpty(user['middleName'])) {
        fullName += user['middleName'] + " "
      }
      if (!AppUtil.isNullOrEmpty(user['lastName'])) {
        fullName += user['lastName']
      }
    }
    return fullName;
  }

  static getRole (): string {
    let user = this.getUser();
    if (!AppUtil.isNullEmpty(user)) {
      let role = user['pmssrole'];
      if (role === 'INST' && 1 === user['instType']) {
        return "CFI";
      }
      return user['pmssrole'];
    }
    return "";
  }
  static getInitiateRole (): string {
    let user = this.getUser();
    if (!AppUtil.isNullEmpty(user)) {
      let role = user['pmssrole'];
      // if (role === 'INST' && 1 === user['instType']) {
      //   return "CFI";
      // }
      return user['pmssrole'];
    }
    return "";
  }
  static getStateId (): number {
    let user = this.getUser();
    if (!AppUtil.isNullEmpty(user)) {
      return user['stateid'];
    }
  }

  static getInstId (): number {
    let val = JSON.parse(sessionStorage.getItem('edcil') || '{}');
    let currentUser = val['currentUser'];
    if (!AppUtil.isNullEmpty(currentUser) && !AppUtil.isNullEmpty(currentUser['user'])) {
      let user = currentUser['user'];
      return user['instid']
    }
    return 0;
  }

}

export enum KEYS {
  TOKEN = "token",
  USER_ID = "userId",
  IS_FROM_PRIOR_REVIEW = "isFromPriorReview",
}
