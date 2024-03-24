import { useState } from "react";
import { Link } from "react-router-dom";

interface Document {
  name: string;
  description: string;
  file: File | null;
}

export  default function AddEditSiteVisits() {
  const [documents, setDocuments] = useState<Document[]>([]);

  let companyName = "suntech-consultants";
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
        Add Site Visit
      </h1>
      <div className="p-2">
        <div>
          <div className="w-full px-2 mb-4">
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="project-no"
                >
                  Project No
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  value=""
                  id="project-no"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select a Project</option>
                  <option> Project 1 </option>
                  <option> Project 2 </option>
                  <option> Project 3 </option>
                </select>
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="doc-no"
                >
                  Doc No
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="doc-no"
                  type="text"
                  placeholder="Enter Doc No"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="client-name"
                >
                  Client
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="client-name"
                  placeholder="Enter Client Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="place-of-visit"
                >
                  Place of Visit
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="place-of-visit"
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
                  Purpose Of Visit
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="shadow  h-24 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Shipping Address"
                />
              </div>
            </div>

            <div className=" w-full overflow-x-auto mt-5 rounded-lg">
              <label>Expense By Suntech</label>
              <table className="table-auto w-full text-sm">
                <thead>
                  <tr className="bg-amber-500 text-white">
                    <th className="border px-4 py-2">NAME</th>
                    <th className="border px-4 py-2">FROM</th>
                    <th className="border px-4 py-2">TO</th>
                    <th className="border px-4 py-2">NO OF DAYS</th>
                    <th className="border px-4 py-2">AIR FARE</th>
                    <th className="border px-4 py-2">CONVEYENCE</th>
                    <th className="border px-4 py-2">LOADING & BOARDING</th>
                    <th className="border px-4 py-2">PROFESSIONAL CHARGES</th>
                    <th className="border px-4 py-2">GST</th>
                    <th className="border px-4 py-2">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.from}</td>
                      <td className="border px-4 py-2">{item.to}</td>
                      <td className="border px-4 py-2">{item.noOfDays}</td>
                      <td className="border px-4 py-2">{item.airFare}</td>
                      <td className="border px-4 py-2">{item.conveyence}</td>

                      <td className="border px-4 py-2">
                        {item.lodgingBoarding}
                      </td>
                      <td className="border px-4 py-2">
                        {item.professionalCharges}
                      </td>
                      <td className="border px-4 py-2">{item.gst}</td>
                      <td className="border px-4 py-2">{item.total}</td>
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
                Download
              </button>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Mark As Sent
              </button>

              <Link
                to={`/company/site-visits-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Return
              </Link>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Revision Up
              </button>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Cancel Doc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
