import { OFFER_ACTIONS } from "./actions";

export type InitialStateType ={
    companyName: string;
    scopeOfWork: string;
    title: string;
    description: string;
    date: string;
    designFee: string;
    siteVisits: string;
    deliverySchedule: string;
    otherTermsAndConditions: string;
}

export interface ActionType {
    type: string;
    payload?: any;
  }



  

