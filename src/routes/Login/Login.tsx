import { useState } from "react";
import suntechLogo from "../../assets/images/suntech-fevicon.png";
import suntechTitle from "../../assets/images/suntech-title.png";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { passwordValidationCondition } from "../../utils/constant";
import { loginUser } from "../../utils/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { selectUser } from "../../store/selector";

interface LoginCredentials {
  email: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [userData, setUserData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const navigate  = useNavigate();
  const dispatch = useDispatch();


  const [isPasswordValid,setIsPasswordValid] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const checkIfPasswordValid = (password: string): boolean => {
    // Password validation criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/.test(password);


    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSymbols
    );
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignInClick = async() => {
    try{
      setIsPasswordValid(true);

      if (!isEmailValid(userData.email)) {
        console.log('cae here')
        toast.error("Invalid email");
        return;
      }
  
  
      if(!checkIfPasswordValid(userData.password)){
        setIsPasswordValid(false);
        toast.error("Invalid password");
        return;
      } 

      
    const signInResponse = await loginUser(userData)
    if(signInResponse.status){
      dispatch(setUser({...signInResponse.data,isLoggedIn:true}));
      navigate('/select-company')
      toast.success("Login successful")
    }
    }catch(e:any){
      console.log(e);
      toast.error(e.message);
    }
  

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 flex flex-col w-96  ring ring-gray-300 ring-opacity-75">
        <div className="mb-4 flex justify-center">
          <div>
            <img src={suntechLogo} alt="Suntech Logo" width={300} />
            <img
              src={suntechTitle}
              alt="Suntech Logo"
              width={300}
              className="mt-4"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          {!isPasswordValid?
          <>
          <pre  className="whitespace-pre-wrap text-red-500 text-sm">
            {passwordValidationCondition}
          </pre>
          </>:<></>}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
