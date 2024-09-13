export class BaseApiResponse {
    error_status: boolean;
    message: string;
    AutoNumber: any;
    data:any;
  type: any;
  loaded: any;
  total: any;
  image: string;
}
export class AutoBaseApiResponse {
    message: BaseApiResponse;
    AutoNumber: number;
    length:number;
}
