import moment from "moment"
import { Link } from "react-router-dom";
import CircularProgressBar from "../../components/CircularProgressBar/CircularProgressBar";

const ProjectsRegister = () => {

  

  return (
    <div >
      <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Projects</h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link to={`/company/add-edit-project`} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
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
        </div>

      </div>
      <table className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-xs">
        <thead className="bg-amber-500 text-white">
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">PROJECT NO</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">DESCRIPTION</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">PROJECT TYPE</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">CLIENT</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">ORDER VALUE</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">DATE OF WORK ORDER</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">WORK ORDER</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">SITE VISIT AMT</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">AMT INVOICED (work order+site visit)</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">AMT YET TO BE INVOICED (work order+site visit)</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Location</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">
              <Link to={`/company/projects/add-edit-project/123`}
                className="text-blue-500 underline font-bold">
                123
              </Link>
            </td>
            <td className="py-2 px-2">SEGMENT LIFT GANTR</td>
            <td className="py-2 px-2">TYPE</td>
            <td className="py-2 px-2">EPL</td>
            <td className="py-2 px-2">400000</td>
            <td className="py-2 px-2">{moment().format('DD MMM YYYY')}</td>
            <td className="py-2 px-2">(attachment)</td>
            <td className="py-2 px-2">100000</td>
            <td className="py-2 px-2">250000</td>
            <td className="py-2 px-2">400000</td>
            <td className="py-2 px-2">GUJRAT</td>
            <td className="py-2 px-2">
              <CircularProgressBar amountInvoiced ={350} totalAmount={500}/>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-2">
              <Link to={`/company/projects/add-edit-project/123`}
                className="text-blue-500 underline font-bold">
                123
              </Link>
            </td>
            <td className="py-2 px-2">SEGMENT LIFT GANTR</td>
            <td className="py-2 px-2">TYPE</td>
            <td className="py-2 px-2">EPL</td>
            <td className="py-2 px-2">400000</td>
            <td className="py-2 px-2">{moment().format('DD MMM YYYY')}</td>
            <td className="py-2 px-2">(attachment)</td>
            <td className="py-2 px-2">100000</td>
            <td className="py-2 px-2">250000</td>
            <td className="py-2 px-2">400000</td>
            <td className="py-2 px-2">GUJRAT</td>
            <td className="py-2 px-2">
              <CircularProgressBar amountInvoiced ={200} totalAmount={500}/>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectsRegister