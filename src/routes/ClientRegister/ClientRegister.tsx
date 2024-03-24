import { Link } from 'react-router-dom';

const ClientRegister = () => {
  return (
    <div >
      <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Client Register</h1>
      <div className="p-2 ">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link to={`/company/add-edit-client`} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
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
            <label className="block mb-1">Document Type:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter document filter"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-1">Client Filter:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter client name"
            />
          </div>
        </div>

      </div>
      <table className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-sm">
        <thead className="bg-amber-500 text-white">
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">Client Code</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Client Name</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">GST No</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Billing Address</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Shipping Address</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">
              <Link to={`/company/add-edit-client/123`}
                className="text-blue-500 underline font-bold">
                123
              </Link>
            </td>
            <td className="py-2 px-2">John</td>
            <td className="py-2 px-2">FGHT-2342</td>
            <td className="py-2 px-2">Thane Mumbai</td>
            <td className="py-2 px-2">Powai Mumbai</td>
          </tr>
          <tr>
            <td className="py-2 px-2"><Link to={`/company/add-edit-client/234`}
              className="text-blue-500 underline font-bold">
              234
            </Link></td>
            <td className="py-2 px-2">Jason</td>
            <td className="py-2 px-2">TYRD-2342</td>
            <td className="py-2 px-2">Navi Mumbai</td>
            <td className="py-2 px-2">Navi Mumbai</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  )
}

export default ClientRegister;