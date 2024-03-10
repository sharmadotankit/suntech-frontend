import moment from "moment";
import { Link } from "react-router-dom";

const AssociateRegister = () => {
  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Associate Register
      </h1>
      <div className="p-2 flex flex-end justify-end">
        <div className="">
          <Link
            to={`/company/generate-salary-slip`}
            className="m-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
          >
            Generate Salary Slip
          </Link>
        </div>
        <div className="">
          <Link
            to={`/company/add-edit-associate`}
            className="m-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block"
          >
            Create +
          </Link>
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
                to={`/company/add-edit-associate/24-11-PQ`}
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
                to={`/company/add-edit-associate/24-11-PQ`}
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

export default AssociateRegister;
