import { Link } from "react-router-dom";
import moment from "moment";

const InvoiceRegister = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Invoices
      </h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link
            to={`/company/add-edit-invoices`}
            className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
          >
            Create +
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-none md:flex md:flex-wrap md:-mx-2">
          {/* Date Range Filter */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Created From:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Created To:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <button
              // onClick={handleAddLocationClick}
              className=" bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
            >
              Download for CA
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-none md:flex md:flex-wrap md:-mx-2">
          {/* Text Box Filter */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Project No:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Project Filter"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Client:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Client Filter"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Project Type:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter Project Type"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Location:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter Location"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Status:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter status"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Invoice Type:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter status"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <button
              // onClick={handleAddLocationClick}
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
      <table
        border={1}
        className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-sm"
      >
        <thead className="bg-amber-500 text-white">
          <tr className="text-lg font-bold bg-amber-700">
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2">TOTAL:</td>
            <td className="py-2 px-2">2000000</td>
            <td className="py-2 px-2">360000</td>
            <td className="py-2 px-2">2400000</td>
            <td className="py-2 px-2">1500000</td>
            <td className="py-2 px-2"></td>
          </tr>
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              PROJECT NO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DESCRIPTION
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DATE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              INVOICE NO.
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              INVOICE TYPE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              CLIENT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              GST NO.
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              GST TYPE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              BILL AMT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              TAX AMT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              TOTAL INVOICE AMT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              TOTAL AMT RECEIVED
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">123</td>
            <td className="py-2 px-2">SEGMENT LIFT GANTR</td>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-invoices/INV-24`}
                className="text-blue-500 underline font-bold"
              >
                INV-24
              </Link>
            </td>
            <td className="py-2 px-2">SITE</td>
            <td className="py-2 px-2">EPL</td>
            <td className="py-2 px-2">AFFMG444G</td>
            <td className="py-2 px-2">CGST+SGST</td>
            <td className="py-2 px-2">2000000</td>
            <td className="py-2 px-2">360000</td>
            <td className="py-2 px-2">2400000</td>
            <td className="py-2 px-2">1500000</td>
            <td className="py-2 px-2">PARTIALLY RECEIVED</td>
          </tr>
          <tr>
            <td className="py-2 px-2">123</td>
            <td className="py-2 px-2">SEGMENT LIFT GANTR</td>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-invoice/INV-25`}
                className="text-blue-500 underline font-bold"
              >
                INV-25
              </Link>
            </td>
            <td className="py-2 px-2">REGULAR</td>
            <td className="py-2 px-2">VKG</td>
            <td className="py-2 px-2">bbsfg55T</td>
            <td className="py-2 px-2">IGST</td>
            <td className="py-2 px-2">2000000</td>
            <td className="py-2 px-2">360000</td>
            <td className="py-2 px-2">2400000</td>
            <td className="py-2 px-2">2400000</td>
            <td className="py-2 px-2">FULLY RECEIVED</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceRegister;
