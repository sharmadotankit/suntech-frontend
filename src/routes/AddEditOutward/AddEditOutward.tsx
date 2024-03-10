import { useState } from "react";
import { Link } from "react-router-dom";

interface Document {
  name: string;
  description: string;
  file: File | null;
}

export default function AddEditOutward() {
  const [documents, setDocuments] = useState<Document[]>([]);

  let companyName = "suntech-consultant";
  const data = [
    {
      id: 1,
      name: "Rahul",
      from: "23/12/2015",
      to: "23/12/2015",
      noOfDays: 1,
      airFare: 0,
      conveyence: 1100,
      lodgingBoarding: 0,
      professionalCharges: 15000,
      gst: 2700,
      total: 17700,
    },
    {
      id: 2,
      name: "Rahul",
      from: "23/12/2015",
      to: "23/12/2015",
      noOfDays: 1,
      airFare: 0,
      conveyence: 1100,
      lodgingBoarding: 0,
      professionalCharges: 15000,
      gst: 2700,
      total: 17700,
    },
    {
      id: 3,
      name: "Rahul",
      from: "23/12/2015",
      to: "23/12/2015",
      noOfDays: 1,
      airFare: 0,
      conveyence: 1100,
      lodgingBoarding: 0,
      professionalCharges: 15000,
      gst: 2700,
      total: 17700,
    },
  ];

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fileList = event.target.files;
    if (fileList?.length) {
      const updatedDocuments = [...documents];
      const file = fileList[0];
      updatedDocuments[index].file = file;
      setDocuments(updatedDocuments);
    }
  };

  const handleDescriptionChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    setDocuments([...documents, { name: "", description: "", file: null }]);
  };
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Add Outward
      </h1>
      <div className="p-2">
        <div>
          <div className="w-full   px-2 mb-4">
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="doc-no"
                >
                  Document No
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="doc-no"
                  type="text"
                  placeholder="Enter Document No"
                />
              </div>
            </div>

            <div className="mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="doc-type"
                >
                  Document Type
                </label>
              </div>
              <div>
                <div className="block text-gray-700 text-sm mb-3 ">
                  <input
                    type="radio"
                    name="doc-type"
                    value="appointment-letter"
                  />{" "}
                  <span>Appointment letter</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input
                    type="radio"
                    name="doc-type"
                    value="complaince-letter"
                  />{" "}
                  <span>Complaince letter</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="doc-type" value="purchase-order" />{" "}
                  <span>Purchase Order</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="doc-type" value="offer-letter" />{" "}
                  <span>Offer letter</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="doc-type" value="invoice-letter" />{" "}
                  <span>Invoice letter</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="doc-type" value="others" />{" "}
                  <span>Others</span>
                </div>
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="doc-no"
                >
                  Description
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="doc-no"
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <select
                  value=""
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select Client</option>
                  <option>Client 1 </option>
                  <option>Client 2 </option>
                  <option>Client 3 </option>
                </select>
              </div>
              <div className="md:w-1/3">
                <select
                  value=""
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select Project</option>
                  <option>Project 1 </option>
                  <option>Project 2 </option>
                  <option>Project 3 </option>
                </select>
              </div>

              <div className="md:w-1/3">
                <input type="date"
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="account-no-1"
              >
                Attach Documents:
              </label>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4">
                      {document?.file ? (
                        <>{document?.file?.name}</>
                      ) : (
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
                            className="cursor-pointer bg-amber-500 text-white py-2 px-4 rounded-lg inline-block sm:flex-wrap"
                          >
                            Choose File
                          </label>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => handleDeleteDocument(index)}
                      className="ml-4 bg-amber-400 text-white py-2 px-4 rounded-lg"
                    >
                      Download
                    </button>
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

            <div className="text-center flex mt-10 flex-wrap">
              <Link
                to={`/company/site-visits-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Save
              </Link>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Edit
              </button>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Download SV Details
              </button>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Generate Invoice
              </button>

              <Link
                to={`/company/site-visits-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
