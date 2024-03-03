const Dashboard = () => {
  return (
    <div >
      <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Dashboard</h1>
      <div className="p-2 ">
        {/* <div className="absolute top-0 right-0 mt-4 mr-4">
          <Link href={"/"} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
            New Company
          </Link>
        </div> */}
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
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
            <label className="block mb-1">Other Filter:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter filter text"
            />
          </div>
        </div>
        {/* Apply Button */}
        <div className="mt-4 text-center">
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600">
            Apply Filters
          </button>
        </div>
      </div>
      <table className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-xs">
        <thead className="bg-amber-500 text-white">
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">Name</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Email</th>
            <th className="text-left py-2 px-2 uppercase font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          <tr>
            <td className="py-2 px-2">John Doe</td>
            <td className="py-2 px-2">john@example.com</td>
            <td className="py-2 px-2">Admin</td>
          </tr>
          <tr>
            <td className="py-2 px-2">Jane Smith</td>
            <td className="py-2 px-2">jane@example.com</td>
            <td className="py-2 px-2">User</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;