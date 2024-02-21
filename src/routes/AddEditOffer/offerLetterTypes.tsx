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

export type ActionType = 'UPDATE_TITLE' | 'UPDATE_DESCRIPTION' | 'RESET';
  
