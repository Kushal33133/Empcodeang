export class LoginResp {
    data: LoginMain;
  }
  
  export class LoginMain {
    error: boolean;
    data: LoginMainData[];
  }
  
  export class LoginMainData {
    USER_ID: string;
    PASSWORD: string;
    CUST_CODE: number;
    CUST_NAME: string;
    IP_ADDESS: string;
    PUNCH_DATE?: any;
    TYPE: string;
    LOC?: any;
  }