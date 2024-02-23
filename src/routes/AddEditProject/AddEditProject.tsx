import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


interface Offer {
    id: number;
    name: string;
}

declare global {
    interface Window {
      google?: any;
    }
  }


const AddEditProject = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
    const [offers, setOffers] = useState<Offer[]>([]);
    const [projectStatus, setProjectStatus] = useState<boolean>(false);
    const [addresses, setAddresses] = useState<string[]>([]);

    // Function to handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // Function to handle offer selection
    const handleOfferSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const offerId = parseInt(event.target.value);
        const offer = offers.find(offer => offer.id === offerId);
        setSelectedOffer(offer || null);
    };

    const handleProjectStatusToggle = () => {
        setProjectStatus(!projectStatus);
    };

    // useEffect hook to simulate fetching offers from database
    useEffect(() => {
        // Simulate fetching offers from database
        // You can replace this with actual fetch request to your backend
        // For example:
        // fetch('your-api-endpoint')
        //   .then(response => response.json())
        //   .then(data => setOffers(data));

        // Mock offers data
        const mockOffers: Offer[] = [
            { id: 1, name: 'Offer 1' },
            { id: 2, name: 'Offer 2' },
            { id: 3, name: 'Offer 3' },
        ];

        setOffers(mockOffers);
    }, []);


  
    

    const toggleProjectStatus = () => {
        setProjectStatus(prevStatus => !prevStatus);
    };

    const location = "20.941767537508166, 78.99941118179434";

    const handleButtonClick = () => {
      // Construct the Google Maps URL with the location coordinates
      const mapsUrl = `https://www.google.com/maps?q=${location}`;
  
      // Open the URL in a new tab
      window.open(mapsUrl, '_blank');
    };

    return (
        (<div className="container mx-auto px-4 py-8">
            <h1 className="text-center text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Add/Edit Project</h1>
            <div>
                <div className="flex justify-between p-4">
                    <div className="w-1/3 p-4 rounded">
                        <div className="mb-4">
                            <label htmlFor="projectNumber" className="text-gray-700 text-sm font-bold mb-2 ">Project No:</label>
                            <input
                                type="text"
                                id="projectNumber"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Project Number"
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="projectNumber" className="text-gray-700 text-sm font-bold mb-2 ">Select Offer No:</label>
                            <select
                                value={selectedOffer ? selectedOffer.id : ''}
                                onChange={handleOfferSelect}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="">Select an offer...</option>
                                {offers.map(offer => (
                                    <option key={offer.id} value={offer.id}>{offer.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="client" className="text-gray-700 text-sm font-bold mb-2 ">Client:</label>
                            <input
                                type="text"
                                id="client"
                                value="Jay Kumar"
                                disabled
                                onChange={handleInputChange}
                                placeholder="Client Name"
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>

                    </div>


                    <div className="w-1/3 p-4 rounded text-center">
                        <label htmlFor="projectStatus" className="text-gray-700 block text-sm font-bold text-gray-700 mb-5">Project Status:</label>
                        <div
                            className={`relative inline-block w-10 h-6 rounded-full bg-gray-200 cursor-pointer ${projectStatus ? 'bg-amber-500' : ''}`}
                            onClick={toggleProjectStatus}
                        >
                            <div className="absolute inset-0.5 w-5 h-5 bg-amber-600 rounded-full shadow-md transform transition-transform duration-300 ease-in-out" style={{ left: projectStatus ? 'calc(100% - 1.2rem)' : '0.15rem' }} />
                        </div>
                        <div>
                            <label htmlFor="toggle" className={`block text-sm font-bold ${projectStatus ? 'text-amber-500' : 'text-gray-400'}`}>
                                {projectStatus ? 'Active' : 'Inactive'}
                            </label>
                        </div>
                    </div>

                    <div className="w-1/3 p-4 rounded text-left">
                        <label htmlFor="projectNumber" className="text-gray-700 text-sm font-bold mb-2 ">Project Type:</label>
                        <div className="flex flex-col">
                            <label className="mb-2">
                                <input type="checkbox" className="mr-2" />Design
                            </label>
                            <label className="mb-2">
                                <input type="checkbox" className="mr-2" /> Fabrication
                            </label>
                            <label className="mb-2">
                                <input type="checkbox" className="mr-2" /> Animation
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                            <label
                                className="text-gray-700 text-sm font-bold mb-2 "
                                htmlFor="long-description"
                            >
                                Long Description
                            </label>
                        </div>

                        <textarea className="shadow appearance-none h-[100px] border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline"
                            id="long-description"
                            placeholder="Long Description" />
                    </div>

                    <div className="w-full mt-5">
                        <div className="flex justify-between items-center w-full">
                            <label
                                className="text-gray-700 text-sm font-bold mb-2 "
                                htmlFor="short-description"
                            >
                                Short Description
                            </label>
                        </div>

                        <input
                            type='text'
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
                            id="short-description"
                            placeholder="Short Description (from offer)" />
                    </div>
                </div>

                <div className="flex justify-between  w-full mt-5">
                    <div className="mb-4 md:flex md:items-center flex-1 mr-10">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="order-value"
                            >
                                Order Value
                            </label>
                        </div >
                        <div className="md:w-1/3">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline"
                                id="order-value"
                                type="number"
                                placeholder="Enter Order value" />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:items-center flex-1">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="order-value"
                            >

                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="order-value"
                            >
                                Order Date
                            </label>
                        </div>
                        <div className="md:w-1/3">
                            <input
                                type="date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:shadow-outline" id="order-value"
                            />
                        </div>
                    </div>
                </div>


                <div className='mt-5'>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="order-value"
                        >
                            Project Correspondance
                        </label>
                    </div>
                    <table className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-sm">
                        <thead className="bg-amber-500 text-white">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold">Name</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold">Designation</th>

                                <th className="text-left py-3 px-4 uppercase font-semibold">Email</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-300">
                            <tr>
                                <td className="py-3 px-4">John Doe</td>
                                <td className="py-3 px-4">Designer</td>
                                <td className="py-3 px-4">john@example.com</td>
                                <td className="py-3 px-4">5345435345</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Jane Smith</td>
                                <td className="py-3 px-4">Designer</td>
                                <td className="py-3 px-4">jane@example.com</td>
                                <td className="py-3 px-4">6574675674</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>


                <div className="mb-4 mt-5 w-full">
                    <label htmlFor="projectNumber" className="text-gray-700 text-sm font-bold mb-2 ">Site Location:</label>
                    <select
                        value={selectedOffer ? selectedOffer.id : ''}
                        onChange={handleOfferSelect}
                        className="w-1/3 px-3 py-2 border rounded"
                    >
                        <option value="">Select state</option>
                        {offers.map(offer => (
                            <option key={offer.id} value={offer.id}>{offer.name}</option>
                        ))}
                    </select>

                </div>

                <div>
                <button onClick={handleButtonClick} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block">
            Click for map
          </button>        
                </div>
            </div>
        </div>)
    );
};

export default AddEditProject;
