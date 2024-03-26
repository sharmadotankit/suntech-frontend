import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentCompany, selectUser } from "../../store/selector";
import { getCompanyData } from "../../utils/services/userService";

interface Company {
  companyName: string;
  gSTNo: string;
  address: string;
  bankDetails: {
    accountNumber: string;
    accountName: string;
    ifscCode: string;
    bankName: string;
    panNumber: string;
  }[];
}

const initialState: Company = {
  companyName: '',
  gSTNo: '',
  address: '',
  bankDetails: [{
    accountNumber: '',
    accountName: '',
    
    ifscCode: '',
    bankName: '',
    panNumber: ''
  }]
};

const CompanyRegister = () => {
  const [companyData, setCompanyData] = useState<Company>(initialState);
  const user = useSelector(selectUser);
  const selectedCompany = useSelector(selectCurrentCompany);

  const fetchCompanyData = async()=>{
    try{
      const companyData = await getCompanyData(user.token,selectedCompany);
    }catch(err:any){
      console.log("Error fetching company data",err);
    }
  }
  useEffect(()=>{
    fetchCompanyData();
  },[])
    
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCompanyData({ ...companyData, [name]: value });
  };


  // const handleBankDetailsUpdate = (event:React.ChangeEvent<HTMLInputElement>,index:number)=>{
  //   const { name, value } = event.target;
  //   const bankDetails = [...companyData.bankDetails];
  //   bankDetails[index][name] = value;
  //   setCompanyData({...companyData, bankDetails });
  // }

  
 
  return (
    <div >
      <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Company Details</h1>
      <div className="p-2">
        <div >
          <div className="w-full   px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company-name">COMPANY NAME:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="company-name"
              type="text"
              placeholder="Enter your company name"
              name="companyName"
              onChange={handleInputChange}
            />


            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gst-no">GST NO:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="gst-no"
              type="text"
              placeholder="Enter your company name"
              name="gSTNo"
              onChange={handleInputChange}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">ADDRESS:</label>
            <textarea
              placeholder="Enter address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              id="address"
              name='address'
              onChange={handleInputChange}
            />

            <h2>Bank Details</h2>

            <label className="block mb-1 font-bold underline">BANK DETAILS 1:</label>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-no-1"
                >
                  ACCOUNT NO.
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-no-1" type="text" placeholder="Enter Account No." />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account-name-1">
                  ACCOUNT NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-name-1" type="text" placeholder="Enter Account Name" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ifsc-code-1">
                  IFSC CODE
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc-code-1" type="text" placeholder="Enter IFSC code" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-name-1">
                  BANK NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank-name-1" type="text" placeholder="Enter Bank Name" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pan-no-1">
                  PAN NO.
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pan-no-1" type="text" placeholder="Enter PAN No" />
              </div>
            </div>

            <label className="block mb-1 font-bold underline">BANK DETAILS 2:</label>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-no-2"
                >
                  ACCOUNT NO.
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-no-2" type="text" placeholder="Enter Account No." />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account-name-2">
                  ACCOUNT NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-name-2" type="text" placeholder="Enter Account Name" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ifsc-code-2">
                  IFSC CODE
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc-code-2" type="text" placeholder="Enter IFSC code" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-name-2">
                  BANK NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank-name-2" type="text" placeholder="Enter Bank Name" />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pan-no-2">
                  PAN NO.
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pan-no-2" type="text" placeholder="Enter PAN No" />
              </div>
            </div>


            <div className="flex items-center justify-between">
              <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Add Bank Details
              </button>
              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompanyRegister;