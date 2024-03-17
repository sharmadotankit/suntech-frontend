import { useState } from "react";
import { Link } from "react-router-dom";

const AddEditExpense = () => {
  const [document, setDocument] = useState<File | null>(null);
  const [expenseStatus, setExpenseStatus] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList?.length) {
      const file = fileList[0];
      setDocument(file);
    }
  };

  const handleDeleteDocument = () => {
    setDocument(null);
  };

  const toggleProjectStatus = () => {
    setExpenseStatus((prevStatus) => !prevStatus);
  };

  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Add/Edit Expense
      </h1>
      <div className="p-2">
        <div>
          <div className="w-full   px-2 mb-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label
                  htmlFor="invoiceNo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Invoice/SS No.
                </label>
                <input
                  type="text"
                  id="invoiceNo"
                  name="invoiceNo"
                  placeholder="Enter invoice number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="col-span-1 flex justify-end items-center">
                <button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg block">
                  Assign Default No.
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expense-type"
                >
                  Expense Type
                </label>
              </div>
              <div>
                <div className="block text-gray-700 text-sm mb-3 ">
                  <input
                    type="radio"
                    name="expense-type"
                    value="it-infrastructre"
                  />{" "}
                  <span>IT Infrastructure</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="expense-type" value="software" />{" "}
                  <span>Software</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="expense-type" value="utility" />{" "}
                  <span>Utility</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input
                    type="radio"
                    name="expense-type"
                    value="office-maintenance"
                  />{" "}
                  <span>Office Maintenance</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="expense-type" value="fuel" />{" "}
                  <span>Fuel</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input
                    type="radio"
                    name="expense-type"
                    value="transportation"
                  />{" "}
                  <span>Transportation</span>
                </div>
                <div className="block text-gray-700 text-sm mb-3">
                  <input type="radio" name="expense-type" value="salary-slip" />{" "}
                  <span>Salary Slip</span>
                </div>
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="number"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="account-no"
                >
                  Account No:
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  value=""
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="account-no-1">Select an account</option>
                  <option value="account-no-1">Account No 1</option>
                  <option value="account-no-2">Account No 2</option>
                  <option value="account-no-3">Account No 3</option>
                </select>
              </div>
            </div>

            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Attach Documents:
                </label>
              </div>
              <div className="md:w-2/3">
                {document ? (
                  <>
                    <>{document?.name}</>
                    <button
                      onClick={() => handleDeleteDocument()}
                      className="ml-4 bg-red-400 text-white py-2 px-4 rounded-lg m-2"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      id={`fileInput-document`}
                      onChange={(e) => handleFileUpload(e)}
                      className="hidden"
                      multiple={false}
                    />
                    <label
                      htmlFor={`fileInput-document`}
                      className="cursor-pointer bg-amber-500 text-white py-2 px-4 rounded-lg inline-block sm:flex-wrap m-2"
                    >
                      Choose File
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Expanse Status
                </label>
              </div>
              <div className="w-2/3 flex items-center">
                <div>
                  <label
                    htmlFor="toggle"
                    className={`block text-sm font-bold ${
                      expenseStatus ?   "text-gray-400":"text-amber-500"
                    }`}
                  >
                    Unpaid
                  </label>
                </div>
                <div
                  className={`relative mx-2 inline-block w-10 h-6 rounded-full bg-gray-200 cursor-pointer ${
                    expenseStatus ? "bg-amber-500" : ""
                  }`}
                  onClick={toggleProjectStatus}
                >
                  <div
                    className="absolute inset-0.5 w-5 h-5 bg-amber-600 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                    style={{
                      left: expenseStatus ? "calc(100% - 1.2rem)" : "0.15rem",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="toggle"
                    className={`block text-sm font-bold ${
                      expenseStatus ? "text-amber-500" : "text-gray-400"
                    }`}
                  >
                    Paid
                  </label>
                </div>
              </div>
            </div>


            <div className="text-center flex mt-10 flex-wrap justify-center">
              <Link
                to={`/company/expense-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Save
              </Link>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Edit
              </button>

              <Link
                to={`/company/expense-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Return
              </Link>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Download
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
};

export default AddEditExpense;
