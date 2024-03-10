import { Link } from 'react-router-dom';
import { useState } from "react";

interface Document {
  name: string;
  description: string;
  file: File | null,
}


const AddEditClient = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  let companyName = "suntech-consultant";
  const data = [
    { id: 1, gstNo: 'GST123', billingAddress: 'Billing Address 1', shippingAddress: 'Shipping Address 1', isDefault: true },
    { id: 2, gstNo: 'GST456', billingAddress: 'Billing Address 2', shippingAddress: 'Shipping Address 2', isDefault: false },
    { id: 3, gstNo: 'GST789', billingAddress: 'Billing Address 3', shippingAddress: 'Shipping Address 3', isDefault: false },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const fileList = event.target.files;
    if (fileList?.length) {
      const updatedDocuments = [...documents];
      const file = fileList[0];
      updatedDocuments[index].file = file;
      setDocuments(updatedDocuments);
    }
  };

  const handleDescriptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedDocuments = [...documents];
    updatedDocuments[index].description = value;
    setDocuments(updatedDocuments);
  };

  const handleDeleteDocument = (index: number) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  const handleAddMoreDocuments = () => {
    // Trigger file input click here
    // setDocuments(file[0])
    setDocuments([...documents, { name: '', description: '', file: null }]);
  };


  return (
    <div >
      <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Add Client</h1>
      <div className="p-2">
        <div >
          <div className="w-full   px-2 mb-4">
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-no-1"
                >
                  Client Code
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-no-1" type="text" placeholder="Enter Client Code" />
              </div>
            </div>


            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-no-1"
                >
                  Client Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account-no-1" type="text" placeholder="Enter Client Name" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-bold underline">Add Address:</label>
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="account-no-1"
                  >
                    GST No.
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter GST No."
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="account-no-1"
                  >
                    Billing Address
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Billing Address"
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="account-no-1"
                  >
                    Shipping Address
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Shipping Address"
                  />
                </div>
              </div>


              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="account-no-1"
                  >
                    Is Default
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    type="checkbox"
                    id="isDefault"
                  // checked={isDefault} 
                  // onChange={handleCheckboxChange} 
                  />
                </div>
              </div>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
                Add Address
              </button>
            </div>



            <div className="overflow-x-auto mt-5 rounded-lg">
              <table className="table-auto w-full text-sm">
                <thead>
                  <tr className="bg-amber-500 text-white">
                    <th className="border px-4 py-2">GST NO</th>
                    <th className="border px-4 py-2">Billing Address</th>
                    <th className="border px-4 py-2">Shipping Address</th>
                    <th className="border px-4 py-2">Is Default</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.gstNo}</td>
                      <td className="border px-4 py-2">{item.billingAddress}</td>
                      <td className="border px-4 py-2">{item.shippingAddress}</td>
                      <td className="border px-4 py-2">
                        <input type="checkbox" checked={item.isDefault} readOnly />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="account-no-1"
              >
                Clients Documents:
              </label>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4">
                      {document?.file ?
                        <>
                          {document?.file?.name}
                        </>
                        :
                        <>
                          <input
                            type="file"
                            id={`fileInput${index}`}
                            onChange={(e) => handleFileUpload(e, index)}
                            className="hidden"
                            multiple={false}
                          />
                          <label
                            htmlFor={`fileInput${index}`}
                            className="cursor-pointer bg-amber-500 text-white py-2 px-4 rounded-lg inline-block sm:flex-wrap">
                            Choose File
                          </label>
                        </>}

                    </div>
                    <input
                      type="text"
                      placeholder="Description"
                      value={document.description}
                      onChange={(e) => handleDescriptionChange(index, e)}
                      className="flex-grow bg-amber-100 rounded-lg py-2 px-4 border-amber-300"
                    />
                    <button
                      onClick={() => handleDeleteDocument(index)}
                      className="ml-4 bg-red-400 text-white py-2 px-4 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={handleAddMoreDocuments}
                className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg block"
              >
                Add Document
              </button>
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="address">Additional Data:</label>
            <textarea
              placeholder="Enter address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              id="address"
            />

            <div className="text-center flex ">
              <Link to={`/company/client-register`} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
                Save Client
              </Link>

              <Link to={`/company/client-register`} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block ml-2">
                Back
              </Link>
            </div>




          </div>
        </div>
      </div>

    </div>
  )
}

export default AddEditClient;