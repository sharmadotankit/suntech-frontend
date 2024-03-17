import moment from "moment";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/helper";

const ExpensesRegister = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Expense Register
      </h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link
            to={`/company/add-edit-expense`}
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
            <label className="block mb-1">Expense Head:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Expense Head Filter"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Purchase From :</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Purchase From Filter"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Invoice No. :</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Invoice Number Filter"
            />
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">A/C No. :</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="A/C No. Filter"
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
        <tr className="text-lg font-bold bg-amber-700">
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2">TOTAL:</td>
            <td className="py-2 px-2">{currencyFormatter(77000)}</td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>
            <td className="py-2 px-2"></td>

          </tr>
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">
                DATE
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              EXPENSE HEAD
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DESCRIPTION
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              AMOUNT
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              INVOICE/SS NO.
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              STATUS
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              PAID FROM A/C NO
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">{moment().format("DD MMM YYYY")}</td>
            <td className="py-2 px-2">Salary</td>
            <td className="py-2 px-2">Salary of Associate</td>
            <td className="py-2 px-2">{currencyFormatter(77000)}</td>
            <td className="py-2 px-2">
              <Link
                to={`/company/add-edit-expense/SAL-24-01-PKUL`}
                className="text-blue-500 underline font-bold"
              >
                SAL-24-01-PKUL
              </Link>
            </td>
            <td className="py-2 px-2">Paid</td>
            <td className="py-2 px-2">xx82</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesRegister