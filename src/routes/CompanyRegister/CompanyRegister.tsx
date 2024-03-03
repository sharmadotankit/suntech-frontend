const CompanyRegister = () => {
    return (
      <div >
        <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Company Details</h1>
        <div className="p-2">
          <div >
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">COMPANY NAME:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                id="company-name"
                type="text"
                placeholder="Enter your company name"
              />
  
  
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="gst-no">GST NO:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                id="gst-no"
                type="text"
                placeholder="Enter your company name"
              />
  
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="address">ADDRESS:</label>
              <textarea
                 placeholder="Enter address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                id="address"
              />
  
              <label className="block mb-1 font-bold underline">BANK DETAILS 1:</label>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label 
                    className="block text-gray-700 text-xs font-bold mb-2" 
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
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="account-name-1">
                    ACCOUNT NAME
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-name-1" type="text" placeholder="Enter Account Name" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="ifsc-code-1">
                    IFSC CODE
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc-code-1" type="text" placeholder="Enter IFSC code" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="bank-name-1">
                    BANK NAME
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank-name-1" type="text" placeholder="Enter Bank Name" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="pan-no-1">
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
                    className="block text-gray-700 text-xs font-bold mb-2" 
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
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="account-name-2">
                    ACCOUNT NAME
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-name-2" type="text" placeholder="Enter Account Name" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="ifsc-code-2">
                    IFSC CODE
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ifsc-code-2" type="text" placeholder="Enter IFSC code" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="bank-name-2">
                    BANK NAME
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank-name-2" type="text" placeholder="Enter Bank Name" />
                </div>
              </div>
  
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="pan-no-2">
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
                <button  className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
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