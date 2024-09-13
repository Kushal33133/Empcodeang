export enum CRMDashboardEnum {
  NEW_ENQUIRY,
  ALL_ENQUIRY,
  ALL_ENQUIRY_CREATED_BY,
  ALL_SALES_CREATED_BY,
  ASSIGNED_ENQUIRY,
  FOLLOW_UPS,
  CANCELLED_ENQUIRY,
  CONFIRMED_SALES,
  ALL_SALES,
  ASSIGNED_SALES,
  FOLLOWUP_SALES,
  CANCELLED_SALES,
  CLOSED_SALES
}


export enum DisconnectionDashboardEnum {
  ALL_REQUEST,
  PENDING_REQUEST,
  ASSIGN_REQUEST,
  FOLLOW_REQUEST,
  DISCONNECTION_REQUEST,
  RETAINED_REQUEST,
}

export enum CollectionDashboardEnum {
  COLLECTION,
  NO_COLLECTION,
  DISCONNECTION_REQUEST,
}

export enum PaymentStatusEnum {
  Received = "RECEIVED",
  Pending = "PENDING"
}

export enum RecevingStatusEnum {
  Received = "RECEIVED",
  Pending = "PENDING",
  Partially_Received = "PARTIALLY_RECEIVED"
}

export enum EkycStatusEnum {
  New = "NEW",
  Approved = "APPROVED",
  Reject = "REJECT",
  Error = "ERROR"
}
export enum WorkStatusEnum {
  Wiring = "WIRING",
  Approved = "APPROVED",
  Reject = "REJECT",
  Installation = "INSTALLATION",
  Pending_Confirmation = "PENDING_CONFIRMATION",
  Closed = "CLOSED",
  New = "NEW",
  Error = "ERROR"
}

export enum ReasonsEnum {
  Disconnection = "Disconnection",
  Connection_Issue = "Connection Issue",
  Followup = "Followup"
}
