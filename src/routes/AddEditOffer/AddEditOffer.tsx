import { useReducer } from "react";
import {
    offerLetterScopeOfWork,
    offerLetterDesignFee,
    offerLetterSiteVisits,
    offerLetterDeliverySchedule,
    offerLetterOtherTermsAndConditions
} from "../../utils/constant";
import { ActionType, InitialStateType } from './offerLetterTypes'; 




const AddEditOffer = () => {

    const initialState = {
        companyName: "suntech-consultant",
        scopeOfWork: offerLetterScopeOfWork,
        title: "",
        description: "",
        date: new Date().toISOString().slice(0, 10),
        designFee: offerLetterDesignFee,
        siteVisits: offerLetterSiteVisits,
        deliverySchedule: offerLetterDeliverySchedule,
        otherTermsAndConditions: offerLetterOtherTermsAndConditions
    }

  
// const offerLetterReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
//   switch (action.type) {
//     case 'UPDATE_TITLE':
//       return { ...state, title: action.payload };
//     case 'UPDATE_DESCRIPTION':
//       return { ...state, description: action.payload };
//     case 'RESET':
//       return initialState; // Assuming initialState is defined somewhere
//     default:
//       return state;
//   }
// };


    // const [offerLetterState,offerLetterDispatch ] = useReducer(offerLetterReducer, initialState);

    const createAction = (type: ActionType, payload?: any) => ({ type, payload });
    const actions: Record<string, ActionType> = {
        UPDATE_TITLE: 'UPDATE_TITLE',
        UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
        RESET: 'RESET'
      };


    return (
        (<div className="px-4 py-8">
            <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Create Offer</h1>
            <div className="flex items-center mb-4">
                <select className="mr-4 px-4 py-2 rounded border" defaultValue="client1">
                    <option value="client1">Client 1</option>
                    <option value="client2">Client 2</option>
                    <option value="client3">Client 3</option>
                </select>
                <input type="text" className="px-4 py-2 rounded border flex-1" placeholder="Add description" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <textarea className="px-4 py-2 rounded border h-32 resize-none" placeholder="Address"></textarea>
                    <div className="flex justify-between mt-4">
                        <input type="text" className="px-4 py-2 rounded border flex-1 mr-2" placeholder="Ref" />
                        <input type="date" className="px-4 py-2 rounded border flex-1" />
                    </div>
                    <input type="text" className="px-4 py-2 rounded border mt-4 w-full" placeholder="Kind Attn" />
                    <textarea className="px-4 py-2 rounded border h-24 resize-none mt-4" placeholder="Subject"></textarea>
                    <input type="text" className="px-4 py-2 rounded border mt-4 w-full" placeholder="Ref" />
                    <p className="mt-4">Dear sir,</p>
                    <h6>1. Scope of work:</h6>
                    <p className="mt-4">With reference to above we are pleased to offer our services for the consultancy work as mentioned in the subject above.</p>
                    <div className="flex items-center mt-4">
                        <textarea className="px-4 py-2 rounded border h-24 resize-none flex-1" placeholder="Scope of work"></textarea>
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">Copy from</button>
                    </div>
                    <textarea className="px-4 py-2 rounded border h-24 resize-none mt-4" placeholder="Design Fee"></textarea>
                    <div className="flex items-center mt-4">
                        <textarea className="px-4 py-2 rounded border h-24 resize-none flex-1" placeholder="Site Visits"></textarea>
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">Copy from</button>
                    </div>
                    <textarea className="px-4 py-2 rounded border h-24 resize-none mt-4" placeholder="Delivery Schedule"></textarea>
                    <div className="flex items-center mt-4">
                        <textarea className="px-4 py-2 rounded border h-24 resize-none flex-1" placeholder="Other Terms and Conditions"></textarea>
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">Copy from</button>
                    </div>
                    <p>We trust you will find our above offer quite reasonable and acceptable. In case you need any further clarifications, we shall be pleased to provide then on hearing from you,</p>
                    <p>We look forward to be associated with you as consultants for your prestigious project, Thanking you and assuring you of our best services and and attention at all times.
                    </p>

                    <h6>
                    For  (Company Name)
                    </h6>
                </div>
                <div className="flex items-end">
                    <img src="authorized_signatory_image.png" alt="Authorized Signatory" className="h-32" />
                </div>
            </div>
        </div>)
    );
}

export default AddEditOffer;
