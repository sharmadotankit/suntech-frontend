import axios, { AxiosResponse } from "axios";

const backEndUrl: string = `${process.env.REACT_APP_BACKEND_URL}`;

type loginCredentailsType = {
  email: string;
  password: string;
};

type createUserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: string;
};

export const loginUser = (
  data: loginCredentailsType
): Promise<AxiosResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      let response = await axios.post(`${backEndUrl}/api/auth/login`, data, {
        headers,
      });
      return resolve(response.data);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};

export const createUser = (
  token: string,
  data: createUserType
): any => {
  return new Promise(async (resolve, reject) => {
    try {
      let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      let response = await axios.post(
        `${backEndUrl}/api/auth/create-user`,
        data,
        { headers }
      );
      return resolve(response.data);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};

export const getUsers = (token: string): Promise<AxiosResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      let response = await axios.get(`${backEndUrl}/api/auth/users`,{
        headers,
      });
      return resolve(response.data);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};
