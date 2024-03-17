import moment from "moment";
import { Link } from "react-router-dom";

const OutwardsRegister = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Outward Register
      </h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link
            to={`/company/add-edit-outward`}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-none md:flex md:flex-wrap md:-mx-2">
          {/* Text Box Filter */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Document Type:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Document Filter"
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
            <button
              // onClick={handleAddLocationClick}
              className="mt-7 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
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
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DOCUMENT NO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              CLIENT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DATE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DOCUMENT TYPE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DESCRIPTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-outward/24-11-PQ`}
                className="text-blue-500 underline font-bold"
              >
                24-11 PQ
              </Link>
            </td>
            <td className="py-2 px-2">Jay Kumar</td>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">Offer Letter</td>
            <td className="py-2 px-2">Offer letter for LG at ajmer</td>
          </tr>
          <tr>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-outward/24-11-PQ`}
                className="text-blue-500 underline font-bold"
              >
                24-11 PQ
              </Link>
            </td>
            <td className="py-2 px-2">Jay Kumar</td>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">Offer Letter</td>
            <td className="py-2 px-2">Offer letter for LG at Ajer</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default OutwardsRegister;
