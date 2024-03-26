import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectUser } from "../../store/selector";
import { passwordValidationCondition } from "../../utils/constant";
import { createUser, getUsers } from "../../utils/services/authService";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: string;
  token?: string;
  _id?: string;
};

const UserRegister = () => {
  const [userData, setUserData] = useState<UserType>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    status: "active",
    token: "",
    _id: "",
  });
  const [error, setError] = useState("");
  const [userList, setUserList] = useState<UserType[]>([]);

  const user = useSelector(selectUser);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "user-status") {
      if (value === "Active") {
        setUserData({ ...userData, status: "active" });
      } else {
        setUserData({ ...userData, status: "inactive" });
      }
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const checkIfPasswordValid = (password: string): boolean => {
    // Password validation criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/.test(password);

    return (
      password?.length >= minLength &&
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

  const handleCreateUser = async () => {
    try {
      setError("");
      setIsPasswordValid(true);

      if (!isEmailValid(userData.email)) {
        toast.error("Invalid email");
        return;
      }

      if (!checkIfPasswordValid(userData.password)) {
        setIsPasswordValid(false);
        toast.error("Invalid password");
        return;
      }

      if (!userData.firstName || !userData.lastName) {
        setError("Enter first name and last name is required");
        return;
      }

      const data = { ...userData, email: userData.email.trim().toLowerCase() };

      const createUserResponse = await createUser(user.token, data);
      if (createUserResponse.status) {
        toast.success(createUserResponse?.message);
        if (!userData._id) {
          setUserList([...userList, createUserResponse.data]);
        }
        setUserData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          status: "active",
          token: "",
          _id: "",
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const fetchUsers = async () => {
    try {
      const userListResponse = await getUsers(user.token);
      console.log(userListResponse);
      if (userListResponse.status) {
        setUserList(userListResponse.data);
      } else {
        toast.error("Something went wrong when fetching users");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || "Something went wrong when fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (id: string | undefined) => {
    setUserData(userList.filter((user) => user._id === id)[0]);
  };

  return (
    <div>
      <h1
        className="text-center text-4xl font-bold mb-4"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        System Users
      </h1>

      <div className="border rounded border-gray-300 p-2 mb-4">
        <div className="mb-4 lg:flex lg:items-center">
          <div className="flex-1 m-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              value={userData.firstName}
            />
          </div>

          <div className="flex-1 m-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter last name"
              onChange={handleInputChange}
              value={userData.lastName}
            />
          </div>
        </div>

        <div className="mb-4 lg:flex lg:items-center">
          <div className="flex-1 m-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              value={userData.email}
            />
          </div>

          <div className="flex-1 m-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-4 lg:flex lg:items-center">
          <div className="flex-1 m-4">
            <label
              htmlFor="user-status"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Status
            </label>
            <span className="mr-5">
              <input
                name="status"
                type="radio"
                value="active"
                checked={userData.status === "active"}
                className="mr-2"
                onChange={handleInputChange}
              />
              Active
            </span>
            <span className="mr-5">
              <input
                name="status"
                type="radio"
                value="inactive"
                checked={userData.status === "inactive"}
                className="mr-2"
                onChange={handleInputChange}
              />
              Inactive
            </span>
          </div>
          <div className="flex-1 m-4"></div>
        </div>

        <div className="text-center">
          {error ? (
            <>
              <pre className="whitespace-pre-wrap text-red-500 text-sm">
                {error}
              </pre>
            </>
          ) : (
            <></>
          )}
          {!isPasswordValid ? (
            <>
              <pre className="whitespace-pre-wrap text-red-500 text-sm">
                {passwordValidationCondition}
              </pre>
            </>
          ) : (
            <></>
          )}
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block mx-auto mb-4"
            onClick={handleCreateUser}
          >
            {userData._id ? "Edit User" : "Create User"}
          </button>
        </div>
      </div>

      <table className="min-w-full bg-amber-100 rounded-lg overflow-hidden text-sm">
        <thead className="bg-amber-500 text-white">
          <tr>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              First Name
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              Last Name
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              Email
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              Status
            </th>
            <th className="text-left py-2 px-2 uppercase font-semibold">
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-300">
          {userList.length > 0 &&
            userList.map((item, i) => (
              <tr key={i}>
                <td className="py-2 px-2">{item.firstName}</td>
                <td className="py-2 px-2">{item.lastName}</td>
                <td className="py-2 px-2">{item.email}</td>
                <td className="py-2 px-2">{item.status}</td>
                <td className="py-2 px-2">
                  {" "}
                  <button
                    className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 p-3 cursor-pointer hover:bg-amber-500 transition duration-100 ease-in-out block mx-auto mb-4"
                    onClick={() => handleEditUser(item._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRegister;
