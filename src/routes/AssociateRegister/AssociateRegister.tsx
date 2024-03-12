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
              ASSO NO
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              NAME
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DESIGNATION
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              USERNAME
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              INITIALS
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              LATEST SALARY SLIP
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              DATE OF JOINING
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              TENURE IN COMPANY
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
               030
              </Link>
            </td>
            <td className="py-2 px-2">Pranav Kulkarni</td>
            <td className="py-2 px-2">Sr. Engineer </td>
            <td className="py-2 px-2">Pkulkarni</td>
            <td className="py-2 px-2">PK</td>
            <td className="py-2 px-2">Icon</td>
            <td className="py-2 px-2">05 APR 2023</td>
            <td className="py-2 px-2">12</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default AssociateRegister;
