import { useReducer } from "react";
import {
    offerLetterScopeOfWork,
    offerLetterDesignFee,
    offerLetterSiteVisits,
    offerLetterDeliverySchedule,
    offerLetterOtherTermsAndConditions
} from "../../utils/constant";
import { ActionType, InitialStateType } from './offerLetterTypes';
import { OFFER_ACTIONS, } from "./actions";
import authSignImage from '../../assets/images/auth-sign.png';

const AddEditOffer = () => {

    const initialState: InitialStateType = {
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




    const offerLetterReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
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


    const [offerLetterState, offerLetterDispatch] = useReducer(offerLetterReducer, initialState);

    return (
        (<div className="px-4 py-8">
            <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Create Offer</h1>
            <div className="flex mb-4">

            </div>

            <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-700 text-xs font-bold mb-2"
                        htmlFor="select-client"
                    >
                        Select Client
                    </label>
                </div>
                <div className="md:w-2/3">
                    <select className="px-4 py-2 rounded border" defaultValue="client1">
                        <option value="client1">Client 1</option>
                        <option value="client2">Client 2</option>
                        <option value="client3">Client 3</option>
                    </select>
                </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-700 text-xs font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        placeholder="Enter description" />
                </div>
            </div>



            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <textarea className="px-4 py-2 rounded border h-32 resize-none" placeholder="Address"></textarea>
                </div>
                <div>
                    <input type="text" className="px-4 py-2 rounded border w-full" placeholder="Ref" />
                    <input type="date" className="px-4 py-2 rounded border w-full mt-10" />
                </div>
            </div>


            <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-700 text-xs font-bold mb-2"
                        htmlFor="kind-attn"
                    >
                        Kind Attn:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="kind-attn"
                        type="text"
                        placeholder="Kind Attn" />
                </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-700 text-xs font-bold mb-2"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                        type="text"
                        placeholder="Subject" />
                </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Ref"
                    >
                        Ref
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Ref"
                        type="text"
                        placeholder="Ref" />
                </div>
            </div>
            <div>
                <p className="mt-4 text-md">Dear sir,</p>
                <p className="mt-4 text-md">With reference to above we are pleased to offer our services for the consultancy work as mentioned in the subject above.</p>
            </div>

            <div className="w-full mt-10">
                <div className="flex justify-between items-center w-full">
                    <label
                        className="text-gray-700 text-xs font-bold mb-2 mt-5"
                        htmlFor="scope-of-work"
                    >
                        Scope Of Work
                    </label>

                    <button className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">Copy from</button>
                </div>

                <textarea className="shadow appearance-none h-[200px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="scope-of-work"
                    placeholder="Scope of work"
                    value={offerLetterState.scopeOfWork} />
            </div>

            <div className="w-full mt-10">
                <div className="flex justify-between items-center w-full">
                    <label
                        className="text-gray-700 text-xs font-bold mb-2 mt-5"
                        htmlFor="desgin-fee"
                    >
                        Design Fee
                    </label>

                    <button className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">Copy from</button>
                </div>

                <textarea className="shadow appearance-none h-[100px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="desgin-fee"
                    placeholder="Design fee"
                    value={offerLetterState.designFee} />
            </div>

            <div className="w-full mt-10">
                <div className="flex justify-between items-center w-full">
                    <label
                        className="text-gray-700 text-xs font-bold mb-2 mt-5"
                        htmlFor="site-visits"
                    >
                        Site Visits
                    </label>

                    <button className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">Copy from</button>
                </div>

                <textarea className="shadow appearance-none h-[100px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="site-visits"
                    placeholder="Site visits"
                    value={offerLetterState.siteVisits} />
            </div>

            <div className="w-full mt-10">
                <div className="flex justify-between items-center w-full">
                    <label
                        className="text-gray-700 text-xs font-bold mb-2 mt-5"
                        htmlFor="delivery-schedule"
                    >
                        Delivery Schedule
                    </label>

                    <button className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">Copy from</button>
                </div>

                <textarea className="shadow appearance-none h-[100px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="delivery-schedule"
                    placeholder="Delivery Schedule"
                    value={offerLetterState.deliverySchedule} />
            </div>


            <div className="w-full mt-10">
                <div className="flex justify-between items-center w-full">
                    <label
                        className="text-gray-700 text-xs font-bold mb-2 mt-5"
                        htmlFor="other-terms-and-conditions"
                    >
                        Other Terms & Conditions
                    </label>

                    <button className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">Copy from</button>
                </div>

                <textarea className="shadow appearance-none h-[300px] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="other-terms-and-conditions"
                    placeholder="Other terms and conditions"
                    value={offerLetterState.otherTermsAndConditions} />
            </div>

            <div className="w-full mt-10">
                <p>We trust you will find our above offer quite reasonable and acceptable. In case you need any further clarifications, we shall be pleased to provide then on hearing from you,</p>
            </div>

            <div className="w-full mt-10">
                <p>We look forward to be associated with you as consultants for your prestigious project, Thanking you and assuring you of our best services and and attention at all times.</p>
            </div>

            <div className="w-full mt-10">
                <p>For  (Company Name)</p>
            </div>



            <div className="flex items-end">
                <img src={authSignImage} alt="Authorized Signatory" className="h-32" />
            </div>
            <div className="flex items-end">
                <p>Authorized Signatory</p>
            </div>


            <div className="flex justify-center">
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out mt-10 font-bold">Create Offer</button>
            </div>
        </div>)
    );
}

export default AddEditOffer;
