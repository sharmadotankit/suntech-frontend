import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddEditInvoices: React.FC = () => {
  const [invoiceType, setInvoiceType] = useState<string>("regular");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceType(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full text-xs">
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Add/Edit Invoices
      </h1>

      <div className="w-full flex justify-end ">
        <div className="w-1/2 flex justify-center items-center font-xs">
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="invoiceType"
            >
              Select Invoice Type:
            </label>
            <div>
              <input
                type="radio"
                id="regular"
                name="invoiceType"
                value="regular"
                checked={invoiceType === "regular"}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="regular">Regular</label>
              <br />
              <input
                type="radio"
                id="siteVisit"
                name="invoiceType"
                value="siteVisit"
                checked={invoiceType === "siteVisit"}
                onChange={handleRadioChange}
                className="mr-2"
                disabled
              />
              <label htmlFor="siteVisit">Site Visit</label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border border-solid border-black">
        <div className="mx-auto w-full border border-solid border-black text-center">
          <p className="text-xl font-bold"> {"Company Name"}</p>
          <p> C-514, Plot No. 52, Ajanta express, Sector-19</p>
          <p> Airoli, Navi Mumbai - 400708</p>
          <p>GSTIN No. 27COUPM8827M1ZM</p>
        </div>
        <div className="grid grid-cols-3">
          <div className="w-full border  border-solid border-black ">
            <p className="text-center border-b border-solid border-black">
              {" "}
              BILL TO
            </p>
            <div className="px-1 py-1">
              <p>M/s Eurocoustic Products Limited</p>
              <p>Vapi Kachigam Road,</p>
              <p>Near Kachigam Char Rasta,</p>
              <p>Kachigam</p>
              <p>Daman (UT)-396210</p>
              <p>GSTIN NO. </p>
              <select
                value=""
                className="w-full border border-solid border-black rounded px-2 mr-1"
              >
                <option>AAABG5567J 1 </option>
                <option>AAABG5567J 2 </option>
                <option>AAABG5567J 3 </option>
              </select>
            </div>
          </div>
          <div className="w-full  border  border-solid border-black ">
            <p className="text-center border-b border-solid border-black">
              BILL TO
            </p>
            <div className="px-1 py-1">
              <p>M/s Eurocoustic Products Limited</p>
              <p>Vapi Kachigam Road,</p>
              <p>Near Kachigam Char Rasta,</p>
              <p>Kachigam</p>
              <p>Daman (UT)-396210</p>
              <p>GSTIN NO.</p>
              <select
                value=""
                className="w-full border border-solid border-black rounded px-2 mr-1"
              >
                <option>AAABG5567J 1 </option>
                <option>AAABG5567J 2 </option>
                <option>AAABG5567J 3 </option>
              </select>
            </div>
          </div>
          <div className="w-full border  border-solid border-black ">
            <p className="text-center border-b border-solid border-black">
              Invoice Information
            </p>
            <div className="px-1 py-1">
              <div>
                <p className="">Invoice Number : </p>
                <input
                  className=" border border-solid border-black rounded w-full px-1"
                  value="2023/21"
                />
              </div>
              <div>
                <p>Job No. : </p>
                <select
                  value=""
                  className="w-full border border-solid border-black rounded px-2 mr-1"
                >
                  <option> Project 1 </option>
                  <option> Project 2 </option>
                  <option> Project 3 </option>
                </select>
              </div>
              <div>
                <p className="">Date : </p>
                <input
                  type="date"
                  className=" border border-solid border-black rounded w-full px-1"
                  value="2023/21"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <p>DESCRIPTION OF SERVICES</p>
            <p>
              Consultancy Services for preparation of fabrication drawings from
              the design dravings of steel girders between piers PP315-PP316 for
              the project Part design and construction of viaduct and 5 elevated
              stations viz Maha Kali Caves, SEEPZ Village, Saki Vihar Road,
              Rambaug & Poval Lake (exduding Architectural finishing and
              Pre-engineered steel roof structure of Stations) trom chainage
              5257.40 m to 9586.50 m of Svami Samarth Nagar-JVLR-SEEPZ-
              KanjurMarg-Vikhroli (EEH) Metro Corridor (Line-6) of
              Mumbai Metro Rail Project.
            </p>

            <p>
              {" "}
              Total Fees :{" "}
              <input
                type="number"
                value="190000"
                className="px-1 py-1 rounded border border-solid border-black"
              />{" "}
            </p>

            <p className="mt-2">
              {" "}
              Fee Break Up :{" "}
              <button className="bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">
                Copy from previous
              </button>
            </p>
            <button className="bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out">
              Add Row
            </button>
          </div>
          <div className="col-span-1 border border-solid border-black"></div>
          <div className="col-span-1 border border-solid border-black"></div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <input
                  type="text"
                  value="Fabrication"
                  className="border border-solid border-black p-1"
                />
                <input
                  type="number"
                  value="25"
                  className="border border-solid border-black p-1"
                />
                <p className="py-1">%</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            {" "}
            <p className="p-1"> ₹ 47500 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6 border border-solid border-black p-1">
          <div className="col-span-4">
            <div className="w-full">
              <p> Deduct Previous Payment Received</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <input
                  type="text"
                  value="Fabrication"
                  className="border border-solid border-black p-1"
                />
                <input
                  type="number"
                  value="25"
                  className="border border-solid border-black p-1"
                />
                <p className="py-1">%</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            {" "}
            <p className="p-1"> ₹ 47500 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>Total:</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="p-1"> ₹ 133000 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>Taxable Value:</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="p-1"> ₹ 133000 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black">
            <div className=" flex">
              <div>
                <select
                  value=""
                  className="flex-2 border border-solid border-black rounded px-2"
                >
                  <option>SGST+CGST </option>
                  <option>SGST </option>
                  <option>CGST </option>
                </select>
              </div>
              <div className="flex-1 border border-solid border-black text-right px-2">
                {" "}
                18%{" "}
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="px-1"> ₹ 133000 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>Add. SGST:</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="p-1"> </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>Add. CGST:</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="p-1"> </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>Net Total:</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 border border-solid border-black"> </div>
          <div className="col-span-1 border border-solid border-black">
            <p className="p-1"> ₹ 156940 </p>{" "}
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div className="flex space-between">
                <p>
                  Amout cargeable in words : Rupees Two Lakhs Twenty four
                  thousand and Two hundred only
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 "> </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-4 border border-solid border-black p-1">
            <div className="w-full">
              <div>
                <p>Company's PAN No. CUOPM8827M</p>
                <p>For Online Transactions:</p>
                <p>A/c Name: SUNTECH ENGINEERING CONSULTANTS</p>
                <p> A/C NO. 188205001642</p>
                <p>IFSC CODE: ICIC0001882</p>
                <p>Bank: ICICI, Airoli Branch</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 "> </div>
        </div>
      </div>

      <div className="w-full px-2 mt-3 flex flex-wrap justify-center">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          ATTACH SIGNED COPY
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          DOWNLOAD
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          DELETE
        </button>

        <button className="bg-amber-300 text-black font-bold px-4 py-2 rounded-md p-3 cursor-pointer m-1">
          GENERATE/VIEW INVOICE LETTER
        </button>
      </div>


      <div className="w-full px-2 mt-3 flex flex-wrap justify-center">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          SAVE
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          EDIT
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          RETURN
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          DOWNLOAD
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          MARK AS SENT
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          CANCEL INVOICE
        </button>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block m-1">
          PRINT
        </button>




      </div>
    </div>
  );
};

export default AddEditInvoices;
