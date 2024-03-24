import { useReducer } from "react";
import {
  offerLetterScopeOfWork,
  offerLetterDesignFee,
  offerLetterSiteVisits,
  offerLetterDeliverySchedule,
  offerLetterOtherTermsAndConditions,
} from "../../utils/constant";
import { ActionType, InitialStateType } from "./offerLetterTypes";
import { OFFER_ACTIONS } from "./actions";
import authSignImage from "../../assets/images/auth-sign.png";

const CreateInvoiceLetter = () => {
  const initialState: InitialStateType = {
    companyName: "suntech-consultants",
    scopeOfWork: offerLetterScopeOfWork,
    title: "",
    description: "",
    date: new Date().toISOString().slice(0, 10),
    designFee: offerLetterDesignFee,
    siteVisits: offerLetterSiteVisits,
    deliverySchedule: offerLetterDeliverySchedule,
    otherTermsAndConditions: offerLetterOtherTermsAndConditions,
  };

  const offerLetterReducer = (
    state: InitialStateType,
    action: ActionType
  ): InitialStateType => {
    switch (action.type) {
      case OFFER_ACTIONS.UPDATE_TITLE:
        return { ...state, title: action.payload };
      case OFFER_ACTIONS.UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
      case OFFER_ACTIONS.RESET:
        return initialState; // Reset state to initial state
      default:
        return state;
    }
  };

  const [offerLetterState, offerLetterDispatch] = useReducer(
    offerLetterReducer,
    initialState
  );

  return (
    <div className="px-4 py-8">
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Create Invoice Letter
      </h1>


      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <textarea
            className="px-4 py-2 rounded border h-32 resize-none"
            placeholder="Address"
          ></textarea>
        </div>
        <div>
          <input
            type="text"
            className="px-4 py-2 rounded border w-full"
            placeholder="Ref"
          />
          <input
            type="date"
            className="px-4 py-2 rounded border w-full mt-10"
          />
        </div>
      </div>

      <div className="mb-4 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kind-attn"
          >
            Kind Attn:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kind-attn"
            type="text"
            placeholder="Kind Attn"
          />
        </div>
      </div>

      <div className="mb-4 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
          />
        </div>
      </div>

      <div className="mb-4 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Ref"
          >
            Ref
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Ref"
            type="text"
            placeholder="Ref"
          />
        </div>
      </div>
      <div>
        <p className="mt-4 text-md">Dear sir,</p>
        <p className="mt-4 text-md">
          Work Order ref no. PORW/SERA/23-24/0319 date 16th September 2023
        </p>
      </div>

      <div className="w-full mt-10">
        <p> Dear Sir,</p>
        <p>
          Please find enclosed herewith our invoice no. <input type="text" value="SUN/2023/28"/> dated 10th October 2023 for ₹ 295,000/- (Rupees Two Lakh Ninety Five Thousand only) or the  above project.
        </p>
        <p> 
            We request you to release the above payment after necessary tax deduction(TDS) at the earliest.
        </p>
        <p>
            Thanking you and assuring you of our best services at all times.
        </p>
       
      </div>


      <div className="w-full mt-10">
      <p> Yours faithfully,</p>
        <p>For (Company Name)</p>
      </div>

      <div className="flex items-end">
        <img src={authSignImage} alt="Authorized Signatory" className="h-32" />
      </div>
      <div className="flex items-end">
        <p>Authorized Signatory</p>
      </div>

      <div className="flex justify-center mt-5">
      <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          SAVE
        </button>
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          EDIT
        </button>
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          RETURN
        </button>
      </div>
    </div>
  );
};

export default CreateInvoiceLetter;
