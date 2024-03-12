import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getYearList } from "../../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faD } from "@fortawesome/free-solid-svg-icons";

type SalaryDataType = {
  type: string;
  name: string;
  value: number;
  disabled: boolean;
};
const GenerateSalarySlip = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<number | "">("");
  const [copySalarySlipId, setCopySalarySlipId] = useState<string | "">("");
  const yearList = getYearList();

  let salaryData: SalaryDataType[] = [
    {
      type: "earning",
      name: "Basic salary",
      value: 0,
      disabled: false,
    },
    {
      type: "earning",
      name: "HRA",
      value: 0,
      disabled: false,
    },
    {
      type: "earning",
      name: "Transport Allowance",
      value: 0,
      disabled: false,
    },
    {
      type: "earning",
      name: "Others",
      value: 0,
      disabled: false,
    },
    {
      type: "deduction",
      name: "Unpaid Leaves",
      value: 0,
      disabled: false,
    },
  ];

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setYear(parseInt(event.target.value));
  };

  const handleCopySalarySlipId = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Generate Salary Slip
      </h1>
      <div className="p-2">
        <div>
          <div className="w-full bar__datapx-2 mb-4">
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="doc-no"
                >
                  Associate Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="doc-no"
                  type="text"
                  placeholder="Search for Associate Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                Select Month
              </label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={month}
                onChange={handleMonthChange}
              >
                <option value="" defaultChecked disabled>
                  Select a Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                Select Year
              </label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={year}
                onChange={handleYearChange}
              >
                {yearList.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                Copy From
              </label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={copySalarySlipId}
                onChange={handleCopySalarySlipId}
              >
                <option value="" defaultChecked disabled>
                  Select a Salary Slip Id
                </option>
                <option value="Salary Slip 1">Salary Slip 1</option>
                <option value="Salary Slip 2">Salary Slip 2</option>
                <option value="Salary Slip 3">Salary Slip 3</option>
                <option value="Salary Slip 4">Salary Slip 4</option>
              </select>
            </div>
            <div className="mt-4">
              {salaryData.map((salarySlipValue) => {
                return (
                  <div className="w-full bar__datapx-2 mb-4">
                    <div className="mb-4 md:flex md:items-center">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="doc-no"
                        >
                          <span className="border border-gray-500 px-1">
                          {salarySlipValue.type == 'earning'? (
                            <>
                              <FontAwesomeIcon icon={faE} />
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faD} />
                            </>
                          )}</span>{"    "}
                          {salarySlipValue.name}
                        </label>
                      </div>
                      <div className="md:w-1/3">
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="doc-no"
                          type="text"
                          placeholder="Enter value"
                        />
                      </div>
                      <div className="md:w-1/3">
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                          Disable
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center flex mt-10 flex-wrap justify-center">
              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Add Earning
              </button>

              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2">
                Add Deduction
              </button>
            </div>

            <div className="text-center flex mt-10 flex-wrap justify-center">
              <Link
                to={`/company/associate-register`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-2"
              >
                Generate +
              </Link>

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

export default GenerateSalarySlip;
