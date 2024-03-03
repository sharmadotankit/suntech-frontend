import suntechLogo from '../../assets/images/suntech-fevicon.png';
import suntechTitle from "../../assets/images/suntech-title.png";
import { Link } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  // const handleLogin = () => {
  //   // Logic for handling login
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 flex flex-col w-96  ring ring-gray-300 ring-opacity-75">
        <div className="mb-4 flex justify-center">
          <div>
            <img src={suntechLogo} alt="Suntech Logo" width={300} />
            <img src={suntechTitle} alt="Suntech Logo" width={300} className='mt-4' />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <Link
          to="/select-company"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
