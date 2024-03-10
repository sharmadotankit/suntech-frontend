import moment from "moment";
import { Link } from "react-router-dom";

const SiteVisitsRegister = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Site Visits
      </h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link
            to={`/company/add-edit-site-visits`}
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
            <label className="block mb-1">Location:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter Location"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Visitor:</label>
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
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DOC NO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              PROJECT NO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              CLIENT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DATE FROM
            </th>

            <th className="text-left py-2 px-2 uppercase font-semibold">
              DATE TO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              NO OF DAYS
            </th>

            <th className="text-left py-2 px-2 uppercase font-semibold">
              PLACE OF VISIT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              VISITOR NAME
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              PURPOSE OF VISIT
            </th>

            <th className="text-left py-2 px-2 uppercase font-semibold">
              AIR FARE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              CONVEYANCE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              LOADGING & BOARDING
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              PROFESSIONAL CHARGES
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">GST</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              TOTAL EXPENSES
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              INVOICE STATUS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-site-visits/SV-123`}
                className="text-blue-500 underline font-bold"
              >
                SV-123
              </Link>
            </td>
            <td className="py-2 px-2">123</td>
            <td className="py-2 px-2">J KUMAR</td>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">
              {moment().add(5, "days").format("DD MMM YYYY")}
            </td>
            <td className="py-2 px-2">2</td>
            <td className="py-2 px-2">GUJRAT LG SITE</td>
            <td className="py-2 px-2">RAHUL</td>
            <td className="py-2 px-2">MEETING</td>
            <td className="py-2 px-2">10000</td>
            <td className="py-2 px-2">1100</td>
            <td className="py-2 px-2">0</td>
            <td className="py-2 px-2">15000 </td>
            <td className="py-2 px-2">2700 </td>
            <td className="py-2 px-2">17700 </td>
            <td className="py-2 px-2">INVOICED </td>
          </tr>
        </tbody>
      </table>

      <div className="w-full px-2 mt-3 flex flex-wrap justify-center">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          DOWNLOAD SELECTED DOCUMENTS
        </button>
      </div>
    </div>
  );
};

export default SiteVisitsRegister;
