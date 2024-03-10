import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Document {
  name: string;
  description: string;
  file: File | null;
}

const AddEditAssociate = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

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
        Add Associate
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
                  Associate No
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="doc-no"
                  type="text"
                  placeholder="Enter Associate No"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dateOfJoining"
                >
                  Date Of Joining
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfJoining"
                  type="date"
                  placeholder="Enter Associate No"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userName"
                >
                  User Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="userName"
                  type="text"
                  placeholder="Enter User Name"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="initial"
                >
                  Initial
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="initial"
                  type="text"
                  placeholder="Enter Initial"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="designation"
                >
                  Designation
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="designation"
                  type="text"
                  placeholder="Enter Designation"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dateOfBirth"
                >
                  Date Of Birth
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                />
              </div>
            </div>

            <label className="block mb-1 font-bold underline">
              BANK DETAILS:
            </label>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dateOfBirth"
                >
                  Date Of Birth
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                />
              </div>
            </div>

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
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="account-no-1"
                  type="text"
                  placeholder="Enter Account No."
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-name-1"
                >
                  ACCOUNT NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="account-name-1"
                  type="text"
                  placeholder="Enter Account Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ifsc-code-1"
                >
                  IFSC CODE
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ifsc-code-1"
                  type="text"
                  placeholder="Enter IFSC code"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="bank-name-1"
                >
                  BANK NAME
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bank-name-1"
                  type="text"
                  placeholder="Enter Bank Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="pan-no-1"
                >
                  PAN NO.
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pan-no-1"
                  type="text"
                  placeholder="Enter PAN No"
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
                  <div key={index} className="flex items-center flex-wrap">
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
                            className="cursor-pointer bg-amber-500 text-white py-2 px-4 rounded-lg inline-block sm:flex-wrap m-2"
                          >
                            Choose File
                          </label>
                        </>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Description"
                      value={document.description}
                      onChange={(e) => handleDescriptionChange(index, e)}
                      className="flex-grow bg-amber-100 rounded-lg py-2 px-4 border-amber-300 m-2"
                    />

                    <button
                      onClick={() => handleDeleteDocument(index)}
                      className="ml-4 bg-amber-400 text-white py-2 px-4 rounded-lg m-2"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleDeleteDocument(index)}
                      className="ml-4 bg-red-400 text-white py-2 px-4 rounded-lg m-2"
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

            <>
              <label
                className="block text-gray-700 text-sm font-bold mt-4 mb-2"
                htmlFor="view-salary-slip"
              >
                View Salary Slip
              </label>
              <div className="mb-4 md:flex md:items-center">
                <div className="md:w-1/4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="view-salary-slip"
                    type="date"
                  />
                </div>
                <div className="md:w-1/4 justify-start">
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out m-2">
                    Download
                  </button>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out m-2">
                    Edit
                  </button>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out m-2">
                    Delete
                  </button>
                </div>
              </div>
            </>

            <div className="text-center flex mt-10 flex-wrap">
              <Link
                to={`/company/associate-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Save
              </Link>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Edit
              </button>


              <Link
                to={`/company/associate-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditAssociate;
