export class ErpEventEmitter {
  task: EmitterTask;
  eventData: any;
  BRANCH_CODE: any;
}
































export enum EmitterTask {
  GET_ASSET_DETAIL_SEARCH,
  EmitterempSearch,
  EmitterClientSearch,

  // ==============33037======>
  GETTYRE,
  breakdown,
  // ---------===========>
  INVOICE_DATE_VALUE,
  GET_AONDATE,
  GET_FROM,
  GET_TO,
  GET_Fromdate,
  GET_Todate,
  BRANCH_VALUE,
  BRANCH_VALUE1,
  BRANCH_VALUE2,
  LORRY_NO_VALUE,
  chllanDes,
  GET_Approval,
  CUSTOMER_VALUE,
  CUSTOMER_RETAIL,
  BILLING_PARTY,
  CONSIGNEE_VALUE,
  CLOSE_POPUP,
  INV_ITEM_CODE,
  //---OFFICE ENTRY-------
  GET_AUTH_EMP_CODE,
  OFFICE_ENTRY_EMP_CODE,
  ASSINGTO,
  OFFICE_FROM_DATE,
  OFFICE_TO_DATE,
  SAVE_ADD_VOUCHER_DATA,
  GET_BANK_VALUE,
  GET_DESIGNATION,
  BRANCH,
  DEPTSEARCH,
  EMPSEARCH,
  REQEMPSEARCH,
  DELEIVERYDATE,
  DATE,
  GET_DEPARTMENT,
  BANK_VALUE,
  JOINING_DATE_VALUE,
  APPOINMENT_DATE_VALUE,
  FLEET_VENDOR_CODE,
  PF_DATE_VALUE,
  RETRIREMENT_DATE_VALUE,
  CONFIRMATION_DATE_VALUE,
  LEAVING_DATE_VALUE,
  BIRTH_DATE_VALUE,
  TRIP_TO_CODE,
  TRIP_FROM_CODE,
  MARRIAGE_DATE_VALUE,
  CURRENT_DATE_VALUE,
  COMMITED_DATE,
  FROM_BRANCH,
  TO_BRANCH,
  CAR_DETAILS,
  GET_DESTINATION,
  GET_TALLY,
  VOUCHER_DATE_VALUE,
  VOUCHER_DATE_VALUE_EDIT,
  CHQRTGS_DATE_VALUE,
  MR_DATE_VALUE,
  BILL_REF_DATE_VALUE,
  GET_GL,
  //-------------LEAVE APPLICATION--------------
  LEV_STRT_DATE,
  LEV_END_DATE,
  AMAZON_CUTOMERS,

  //-------------ITEM MASTER -------------------
  ITEM_CODE,
  // ----
  branch_search,
  task_branch_branch_search,
  task_from_branch_search,
  task_to_branch_search,
  //-------------LORRY MASTER -------------------
  EFFECTIVE_FROM_DATE,
  LORRY_EFFECT_FROM_DATE,
  LORRY_EFFECT_TO_DATE,
  POLICY_VALID_DATE,
  TO_DATE,
  INVOICE_DATE,
  PERMIT_VALID_DATE,
  ROUTE_EFFECT_FROM_DATE,
  ROUTE_EFFECT_TO_DATE,
  AMAZON_CUTOMER,
  AMAZON_CUTOMER2,
  AMAZON_CUTOMER1,
  GET_TDSGL,
  GET_ALL_STATES_SEARCH,
  GET_ALL_STATES_SEARCH2,

  //---------------LORRY BROKER -------------------
  GET_LORRY_BRANCH,
  //------------------------------
  getchallan_date,
  //---------------LORRY BROKER -------------------
  //------------------------------
  TABLE_BRANCH,
  TABLE_DEPT,
  TABLE_EMP,
  VOUCHER_TYPE,
  VOUCHER_TYPE_EDIT,
  GL_CODE,
  SL_CODE,
  APPLICATION_SEARCH,
  TRANS_IUT_CUST,
  SUB_DEPT,
  ESIC,
  CURRENT_LOCATION,
  TABLE_CAR,
  STATE_VISE,
  //-----------------CFT Master---------------------------------------------------------
  cftItemCode,
  CUSTOMERVALUE,
  EFFECTIVEFROM_DATE_VALUE,
  EFFECTIVETO_DATE_VALUE,
  CNDETAILS,
  Get_Emp,
  GET_Aprroval,

  //----------------VendorMaster TaskCodes----------------------------------------------------------------------------------------------
  GET_BRANCH_VEN,
  GET_BILLFROM,
  GET_SHIPFROM,
  DECL_FROM_DATE,
  DECL_TO_DATE,
  VEND_ENTER_DATE,
  VEND_CODE_AUTO,
  BRANCHCODE_CHECK_LIST,
  BRANCHCODE_CHECK_LIST1,
  BRANCHCODE_CHECK_LIST2,
  BRANCHCODE_CHECK_LIST3,
  //---------------OA USER LEVEL LIST---------------
  OA_BRANCH,
  OA_EMP_SEARCH,
  //----------------------ADR MODULE
  EST_DATE,
  ADR_NO_AUTO,
  TASKMEETING,
  BROKER_CODE,
  //---------------------OPERATION_FAILURE-------------------
  OPERATION_FAILURE_DATE,
  //-----------------------BOM CREATION---------
  BOM_ITEM_CODE,
  //-----------------------TRANSAFE INDENT CREATION---------
  INDENT_ITEM_CODE,
  //--------------------OPERATION TRIP SHEET-----------------
  TTRIP_HOLDING_DATE,
  TRIP_START_DATE,
  TRIP_END_DATE,
  TRIP_EXP_DATE,
  TRIP_ADVANCE_MODE_DT,
  //---------------------------------------------------------
  //------------------Challan Vehicle No - Gate Vehicle Arrival---------
  CHALLAN_VEH_NO_AUTO,
  VEH_NO,
  VEH_NO_1,
  //----------------------------------------------
  xyz,
  /** Pur Order */
  GET_PARTY,
  GET_INDENTLIST,
  TABLE_ITEM,
  TABLE_ITEM_SYS_CODE,
  TABLE_LORRY_NO,
  TABLE_VENDOR_CODE_OTPL,
  BROKERITEM,

  //-------------training dept-------
  TRAINEE_CANDIDATE_EMPID,
  verify_refcode,
  Search_Candidate_Attendance,
  TrainingId,
  BRANCH_CODE,
  //----------------------------------------
  //----------------------------------------
  Ge_Date,
  Po_Date,
  Ociref_Date,
  Invoice_Date,
  Gr_Date,
  Reporting_Time,
  department,
  app_department,
  designation,
  GET_PO_NO,
  GET_PONO,
  GET_RETAIL_BRACH_CODE,
  Task1,
  Task2,
  Task3,
  Task4,
  Task5,
  Task6,
  Task7,
  Task8,
  Task9,
  Task10,
  Task11,
  EMP_VALUE,
  //-------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------PURCHASE MODULE------------------------------------------------------------------
  GET_BRANCHCODE,
  COMPLETION_DATE,
  //----------------------------------STOCK ENTRY------------
  STOCK_FROM_ITEM,
  STOCK_TO_ITEM,
  //------------------------------------------------ REQUISITION-ENTRY------------------------------------------------------------
  GET_REQ_BRANCH,
  GET_REQ_DEPART,
  GET_REQ_CUST,
  GET_JOB_NO_REQ,
  //-----------------------------------------------------BRANCHWISE SERIAL ITEM STOCK ----------------------------------------------------------------
  GET_BRANCHWISE_DEPT_CODE,
  GET_BRANCHWISE_EMP_CODE,

  //------------------------------------------------------EMPLOYEE BIRTHDAY HRD MODULE-------------------------------------------------------------------------------
  EMP_BIRTHDAY_FROM_DATE,
  EMP_BIRTHDAY_TO_DATE,
  //--------------------------------------------------------PICKUP REQ OPERATION MODULE-----------------------------------------------------------------------------
  GET_PICKUP_PARTYCODE,
  GET_PICKUP_BRANCHCODE,
  //------------------------------------------------ IUT BOX-ENTRY------------------------------------------------------------
  GET_IUT_SHIPTO,
  GET_IUT_VEH_NO,
  ITEM_USED_IN,
  ITEM_REP_WITH,
  //----------------------------------------------------------PDA-FRANCHISE-MODULE-----------------------------------------------------
  PDA_CNT_BRANCH,
  PDA_REQ_ENTRY_REQ_EMP,
  PDA_REQ_ENTRY_REQ_BRANCH,
  PDA_REQ_REQUIRED_DATE,
  PDA_REQ_CLOSE_DATE,
  PDA_MASTER_KOM,
  //--------------------------------------------------OM VAHAK BRANCH STATE ENTRY
  OM_VAHAK_BRANCH_STATE_ENTRY,
  //-------------------------------------------------ADR-CREATION/RECEIVING OPERATION MODULE-------------------------------------------------------------------
  GET_ADR_CRE_SENDTOBRANCH,
  GET_ADR_REC_ADRNO,
  //---------------------OPERATION-FAILURE--
  DATE_ENTRY,
  GET_DATE_DAILY_TAB,
  GET_FROM_DATE_WEEKLY_TAB,
  GET_TO_DATE_WEEKLY_TAB,
  GET_FROM_DATE_MONTHLY_TAB,
  GET_TO_DATE_MONTHLY_TAB,
  //---------------------OPS MIS REPORT---
  FR_DT,
  TO_DT,
  FROM_DT,
  P_FR_DT,
  P_TO_DT,
  ABC,
  //--------------Client Mail Report MIS
  Get_Car_Detail,
  //--------------
  /** Material Return  */
  ItemCode,
  SHITP,
  GET_Fromvocher,
  GET_Tovoucher,
  /** Emp Register   */
  DOJDATE,
  DOBDATE,
  /** End  */
  find,



  /** End  */
  GET_billupto,
  OfficeEntry,
  OfficeEntryTo,
  OfficeEntryFrom,

  //------------ RFQ Hiring Module
  FROM_DATE_HIRING,
  TO_DATE_HIRING,
  EXPIRE_DATE_UPDATE,
  USER_REGISTER_FROM,
  USER_REGISTER_TO,
  //--------------PENDING POD MARKET VEHICLE HIRING
  FROM_DATE_POD_PENDING,
  TO_DATE_POD_PENDING,

  //------------Emp Self Service-Attendance Summary
  FROM_DATE_ATT,
  TO_DATE_ATT,
  //------------Emp Self Service-Visit Entry
  SOURCE_BRANCH,
  DESTINATION_BRANCH,
  Fr_DATE,
  To_DATE,
  Report_Person,
  //------------Emp Self Service-Visit Entry
  GL_CODE_SLMASTER,
  SL_CODE_SLMASTER,

  //-------------SL_Type_master
  GL_SL_Type,
  VerndorBranchFrom,
  VerndorBranchTo,
  VendorSearch,
  HubGateEntryDate,
  EndDateRate,

  //------------------------------------------------Vehicle Container Condition Module Operation------------------------------------------------------------
  GET_FROM_VEH,
  GET_TO_VEH,
  GET_LOADER_VEH,
  FixeLorrySearch,
  //------------------------------------------------------FLEET MODULE  TRIP SHEET ENTRY-------------------------------
  LORRY_DRIVER,
  LORRY_DETAIL_FLEET,
  TRIP_START,
  TRIP_END,
  TRIP_ROUTE_FROM,
  TRIP_ROUTE_TO,
  TRIP_CLOSE_BRANCH,
  TRIP_HOLDING_BRANCH,
  ADVANCE_DESTINATION_BRANCH,
  TRIP_ROUTE_FROM_CODE,
  TRIP_ROUTE_TO_CODE,
  FLEET_JOB_NO,
  FLEET_AUTH_CODE,
  FLEET_ITEM_CODE,
  //------------------------------------------------------OM CONSTRUCTION------------------------
  START_DATE,
  TARGET_DATE,
  VENDOR_CODE,
  PREMISE_LOCATION,
  KAM_CODE,
  //------------------------------------------------------TDS -------------------------------------
  EMP_CODE,
  //------------------------------------------------------------LORRY REQUEST-OTPL------------------------------------
  LORRY_REQ_DEST,
  LORRY_ASSIGN_VENDOR,
  LORRY_ASSIGN_VENDOR_ALL,
  LORRY_TYPE_OTPL,
  LORRY_NO_OTPL,
  FROM_DATE_OTPL,
  TO_DATE_OTPL,

  //-----------------------------------------------------------------JOB Description----HRD Module------------------
  JOB_DESIG,
  //--------------Autocomplete Site Id
  MomNextDate,
  TABLE_SITE_ID,
  DOBDATECAND,
  FROMCANDIDATE,
  TOCANDIDATE,
  BANKSEARCH,
  CHALLNMANNUALDATE,
  DATEOFJOINING,
  //-------------------------------------------------------------LORRY ATTACH REQUEST FORM (QUALITY CHECKLIST DASHBOARD)---
  LORRY_ATTACH_FROMBRANCH,
  LORRY_ATTACH_TOBRANCH,
  LORRY_ATTACH_VIABRANCH,
  LORRY_ATTACH_LORRTTYPE,
  LORRY_ATTACH_VENDOR_CODE,
  LORRY_ATTACH_LORRY_NO,
  //----------------------------------------------------HRD EMP TRANSFER UPGRATION
  HRD_EMP_CODE,
  //-------------------------------------------------------MM STOCK TRANSFER COMPANY WISE
  FROM_BRANCH_STOCK,
  TO_BRANCH_STOCK,
  //------------------------------------------------------TCS SITE MASTER
  TCS_SITE_BRANCH,
  //////////////////-----------------------PETROL PUMP CONTARCT----------------------
  PETROL_PUMP_CONTRACT,
  LAND_FROM_DATE,
  LAND_TO_DATE,
  //-----------------------------------------TSL QUOTATION ENTRY----------------------
  PARTY_CODE,
  QUOT_ITEM_CODE,
  // -------------------------------------CONTAINER REPAIR ESTIMATION-----------------
  SURVEY_DATE,
  MFG_DATE,
  ESTIMATE_DATE,
  BRANCH_EST,
  TSF_VENDOR_CODE,
  ASSIGN_DATE,
  ASSIGN_TO,
  ASSIGN_TO_USER,
  ASSIGN_TO_MANAGEMENT,
  TSF_VENDOR_CODE_CONSIGNEE,
  TSF_VENDOR_CODE_RGP_BTOV,

  VENDOR_FROM_SEARCH_CODE,
  VENDOR_TO_SEARCH_CODE,
  CUSTOMER_FROM_SEARCH_CODE,
  CUSTOMER_TO_SEARCH_CODE,

  // TCS
  TCS_FROM_SITE_ID,
  TCS_TO_SITE_ID,
  TCS_FROM_BRANCH,
  TCS_TO_BRANCH
  // End of TCS
  ,


  RVM_LORRY_NO,
  search_retail_branch
}
